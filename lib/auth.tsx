import router from "next/router";
import { createContext, useContext, useState, useEffect } from "react";
import { ApiError, Session } from "@supabase/supabase-js";
import { gql } from "@apollo/client";

import { supabase } from "./supabase";
import apolloClient from "./apollo";
import { Profilo } from "../graphql/types/ts";

const AuthContext = createContext(undefined);

type AuthProviderValue = {
	user: Profilo;
	session: Session;
	loading: boolean;
	signOut: () => Promise<void>;
	signInWithMagic: (email: any) => Promise<{
		error: ApiError;
	}>;
	signInWithGoogle: () => Promise<void>;
	signInWithPassword: ({
		email,
		password,
	}: {
		email: any;
		password: any;
	}) => Promise<{
		error: ApiError;
	}>;
	signUpWithPassword: (userData: {
		name: string;
		username: string;
		email: string;
		password: string;
	}) => Promise<void>;
};

export function useAuth(): AuthProviderValue {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const auth = useProvideAuth();

	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useProvideAuth() {
	const [user, setUser] = useState<Profilo>(null);
	const [session, setSession] = useState<Session>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		// Get session and user
		setSession(supabase.auth.session());
		handleUser(supabase.auth.user());

		// Listen for changes on auth state (logged in, signed out, etc.)
		const { data: authListener } = supabase.auth.onAuthStateChange(
			async (event, session) => {
				setSession(session);

				await handleUser(session?.user ?? null);
			}
		);

		return () => {
			authListener.unsubscribe();
		};
	}, []);

	// TODO: Add user handling logic to remove everything not necessary
	const handleUser = async (rawUser) => {
		if (rawUser) {
			const user = await formatUser(rawUser);

			setUser(user);
		} else {
			setUser(null);
		}

		setLoading(false);
	};

	const signUpWithPassword = async (
		userData: {
			name: string;
			username: string;
			email: string;
			password: string;
		},
		options?: {
			redirectTo?: string;
		}
	) => {
		const { error } = await supabase.auth.signUp(
			{
				email: userData.email,
				password: userData.password,
			},
			{
				data: {
					name: userData.name,
					username: userData.username,
				},
			}
		);
		if (error) throw error;

		router.push(options?.redirectTo ?? "/verifica-email");
	};

	/**
	 * @param email Address to which the verification email gets sent
	 * @deprecated Don't use this, it will fail on the database
	 * @returns The error if any
	 */
	const signInWithMagic = async (email) => {
		let { error } = await supabase.auth.signIn({
			email,
		});
		if (error) return { error };

		router.push("/verifica-email");
	};

	// Sign in users given their credentials
	const signInWithPassword = async (
		credentials: { email: string; password: string },
		options?: {
			redirectTo?: string;
		}
	): Promise<void> => {
		let { error } = await supabase.auth.signIn(credentials, options);
		if (error) throw error;

		router.push(options?.redirectTo ?? "/");
	};

	const signInWithGoogle = async (): Promise<void> => {
		let auth = await supabase.auth.signIn({
			provider: "google",
		});
		if (auth.error) throw auth.error;
	};

	const signOut = async (): Promise<void> => {
		let { error } = await supabase.auth.signOut();
		if (error) throw error;

		router.push("/");
	};

	// Will be passed down to Signup, Login and Dashboard components
	return {
		user,
		session,
		loading,
		signOut,
		signInWithMagic,
		signInWithGoogle,
		signInWithPassword,
		signUpWithPassword,
	};
}

const formatUser = async (rawUser): Promise<Profilo> => {
	const queryProfilo = gql`
		query Profilo($id: ID!) {
			profilo(id: $id) {
				id
				nome
				username
				email
				immagine
				corsi {
					id
				}
			}
		}
	`;

	const { data, error } = await apolloClient.query({
		query: queryProfilo,
		variables: {
			id: rawUser.id,
		},
	});

	if (error) throw error;

	return data.profilo;
};

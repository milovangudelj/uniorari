import router from "next/router";
import { createContext, useContext, useState, useEffect } from "react";
import { gql } from "@apollo/client";

import { supabase } from "./supabase";
import apolloClient from "./apollo";
import { Profilo } from "../graphql/types/ts";
import { ApiError, Session } from "@supabase/supabase-js";

const AuthContext = createContext(undefined);

export function useAuth(): {
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
} {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const auth = useProvideAuth();

	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useProvideAuth() {
	const [user, setUser] = useState<Profilo>(null);
	const [session, setSession] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// get session for user
		const session = supabase.auth.session();
		setSession(session);

		handleUser(session?.user);

		// Listen for changes on auth state (logged in, signed out, etc.)
		const { data: listener } = supabase.auth.onAuthStateChange(
			async (event, session) => {
				setSession(session);
				await fetch("/api/auth", {
					method: "POST",
					body: JSON.stringify({ event, session }),
					headers: {
						"Content-Type": "application/json",
					},
				});

				await handleUser(session?.user);
			}
		);

		return () => {
			listener?.unsubscribe();
		};
	}, []);

	// TODO: Add user handling logic to remove everything not necessary
	const handleUser = async (rawUser) => {
		if (rawUser) {
			const user: Profilo = await formatUser(rawUser);

			setUser(user);
		} else {
			setUser(null);
		}

		setLoading(false);
	};

	const signUpWithPassword = async (userData: {
		name: string;
		username: string;
		email: string;
		password: string;
	}) => {
		const auth = await supabase.auth.signUp(
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
		if (auth.error) throw auth.error;

		router.push("/verifica-email");
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

	const signInWithPassword = async ({ email, password }) => {
		let { error } = await supabase.auth.signIn({
			email,
			password,
		});
		if (error) return { error };

		router.push("/");
	};

	const signInWithGoogle = async () => {
		let auth = await supabase.auth.signIn({
			provider: "google",
		});
		if (auth.error) throw auth.error;
	};

	const signOut = async () => {
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

const formatUser = async (rawUser) => {
	const queryProfilo = gql`
		query Profilo($id: ID!) {
			profilo(id: $id) {
				id
				nome
				username
				email
				immagine
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
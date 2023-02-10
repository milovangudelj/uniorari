import router from "next/router";
import { createContext, useContext, useState, useEffect } from "react";
import { AuthApiError, AuthError, Session } from "@supabase/supabase-js";
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
		error: AuthApiError;
	}>;
	signInWithGoogle: () => Promise<void>;
	signInWithPassword: ({
		email,
		password,
	}: {
		email: any;
		password: any;
	}) => Promise<{
		error: AuthApiError;
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
		const fetchUser = async () => {
			const authSession = (await supabase.auth.getSession()).data.session;
			const authUser = (await supabase.auth.getUser()).data.user;

			setSession(authSession);
			handleUser(authUser);
		};
		fetchUser();

		// Listen for changes on auth state (logged in, signed out, etc.)
		const { data: authListener } = supabase.auth.onAuthStateChange(
			async (event, session) => {
				setSession(session);

				if (event === "SIGNED_OUT" || event === "USER_DELETED") {
					// delete cookies on sign out
					const expires = new Date(0).toUTCString();
					document.cookie = `uo-access-token=; path=/; expires=${expires}; SameSite=Lax; secure`;
					document.cookie = `uo-refresh-token=; path=/; expires=${expires}; SameSite=Lax; secure`;
				} else if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED") {
					const maxAge = 30 * 24 * 60 * 60; // 100 years, never expires
					document.cookie = `uo-access-token=${session.access_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`;
					document.cookie = `uo-refresh-token=${session.refresh_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`;
				}

				await handleUser(session?.user ?? null);
			}
		);

		return () => {
			authListener.subscription.unsubscribe();
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
		const { error } = await supabase.auth.signUp({
			email: userData.email,
			password: userData.password,
			options: {
				data: {
					name: userData.name,
					username: userData.username,
				},
			},
		});
		if (error) return { error };

		router.push(options?.redirectTo ?? "/verifica-email");
	};

	/**
	 * @param email Address to which the verification email gets sent
	 * @deprecated Don't use this, it will fail on the database
	 * @returns The error if any
	 */
	const signInWithMagic = async (
		email: string
	): Promise<void | { error: AuthError }> => {
		let { error } = await supabase.auth.signInWithOtp({
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
	): Promise<void | { error: AuthError }> => {
		let { error } = await supabase.auth.signInWithPassword({
			...credentials,
		});
		if (error) return { error };

		router.push(options?.redirectTo ?? "/");
	};

	const signInWithGoogle = async (): Promise<void | {
		error: AuthError;
	}> => {
		let { error } = await supabase.auth.signInWithOAuth({
			provider: "google",
		});
		if (error) return { error };
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

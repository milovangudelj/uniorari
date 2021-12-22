import router from "next/router";
import { createContext, useContext, useState, useEffect } from "react";
import { gql } from "@apollo/client";

import { supabase } from "./supabase";
import apolloClient from "./apollo";

const AuthContext = createContext(undefined);

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const auth = useProvideAuth();

	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useProvideAuth() {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Check active sessions and sets the user
		const session = supabase.auth.session();

		handleUser(session?.user);

		// Listen for changes on auth state (logged in, signed out, etc.)
		const { data: listener } = supabase.auth.onAuthStateChange(
			async (event, session) => {
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
			const user = await formatUser(rawUser);

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

	const signInWithMagic = async (email) => {
		let { user, error } = await supabase.auth.signIn({
			email,
		});
		if (error) throw error;

		router.push("/verifica-email");
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
		loading,
		signOut,
		signInWithMagic,
		signInWithGoogle,
		signUpWithPassword,
	};
}

const formatUser = async (rawUser) => {
	const queryUtente = gql`
		query Utente($id: String) {
			utente(id: $id) {
				id
				name
				username
				email
				image
			}
		}
	`;

	const { data, error } = await apolloClient.query({
		query: queryUtente,
		variables: {
			id: rawUser.id,
		},
	});

	if (error) throw error;

	return data.utente;
}; 
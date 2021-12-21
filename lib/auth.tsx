import router from "next/router";
import { createContext, useContext, useState, useEffect } from "react";
import { gql } from "@apollo/client";

import { supabase } from "./supabase";
import apolloClient from "./apollo";

const path =
	process.env.NODE_ENV === "development"
		? "http://localhost:3000"
		: "https://uniorari.it";

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
		// // Check active sessions and sets the user
		// 	const session = supabase.auth.session();

		// 	await handleUser(session.user);

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

		if (rawUser) {
			const { data, error } = await apolloClient.query({
				query: queryUtente,
				variables: {
					id: rawUser.id,
				},
			});

			setUser({ ...data.utente });
		} else {
			setUser(null);
		}

		setLoading(false);
	};

	const signUpWithMagic = async (userData) => {
		const signinRes = await supabase.auth.signIn({
			email: userData?.email,
		});
		if (signinRes.error) throw signinRes.error;

		const { data, error } = await fetch(
			`/api/createNewUser?name=${userData?.name}&username=${userData?.username}&email=${userData?.email}`
		).then((res) => res.json());
		if (error) throw error;

		router.push("/verifica-email");
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

		const { errors } = await fetch("/api/complete-user").then((res) =>
			res.json()
		);
		if (errors) throw errors;
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

		router.push("/");
	};

	const signUpWithGoogle = async () => {
		let auth = await supabase.auth.signIn(
			{
				provider: "google",
			},
			{
				redirectTo: "https://uniorari.it/api/complete-user?from=google",
			}
		);
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
		signInWithMagic,
		signInWithGoogle,
		signUpWithGoogle,
		signUpWithMagic,
		signUpWithPassword,
		signOut,
	};
}

const formatUser = (user) => {
	return {
		id: user.uid,
		email: user.email,
		name: user.displayName,
		username: user.displayName,
		//   provider: user.providerData[0].providerId,
		image: user.photoURL,
	};
}; 
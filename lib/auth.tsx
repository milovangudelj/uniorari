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
			`/api/createNewUser?name_input=${userData?.name}&username_input=${userData?.username}&email_input=${userData?.email}`
		).then((res) => res.json());
		if (error) throw error;

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
		let signinRes = await supabase.auth.signIn({
			provider: "google",
		});
		if (signinRes.error) throw signinRes.error;

		let userLookup = await fetch(
			`/api/checkExists?email=${signinRes.user.email}`
		).then((res) => res.json());

		if (userLookup.email) return;

		const identityData = signinRes.user.identities.find(
			(idntity) => idntity.provider === "google"
		).identity_data;

		const { data, error } = await fetch(
			`/api/createNewUser?id_input=${signinRes.user.id}&name_input=${
				identityData.full_name
			}&username_input=${identityData.full_name
				.toLowerCase()
				.replaceAll(" ", "_")
				.replaceAll(".", "")}&email_input=${
				identityData.email
			}&image_input=${identityData.picture}`
		).then((res) => res.json());
		if (error) throw error;

		router.push("/");
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
		signUpWithMagic,
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
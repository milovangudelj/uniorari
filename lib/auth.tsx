import router from "next/router";
import {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from "react";
import { AuthSession, AuthUser } from "@supabase/supabase-js";
import { gql } from "@apollo/client";

import prisma from "./prisma";
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

		setUser(session?.user ? handleUser(session.user) : null);
		setLoading(false);

		// Listen for changes on auth state (logged in, signed out, etc.)
		const { data: listener } = supabase.auth.onAuthStateChange(
			async (event, session) => {
				setUser(session?.user ? handleUser(session.user) : null);
				setLoading(false);
			}
		);

		return () => {
			listener?.unsubscribe();
		};
	}, []);

	// TODO: Add user handling logic to remove everything not necessary
	const handleUser = (rawUser) => {
		return rawUser;
	};

	const signUp = async (data) => {
		let { user, error } = await supabase.auth.signUp({
			email: data?.email,
		});
		if (error) throw error;

		let createUserMutation = gql`
			mutation (
				$idUtente: String!
				$nameUtente: String!
				$usernameUtente: String!
			) {
				creaUtente(
					idUtente: $idUtente
					nameUtente: $nameUtente
					usernameUtente: $usernameUtente
				) {
					id
				}
			}
		`;

		try {
			await apolloClient.mutate({
				mutation: createUserMutation,
				variables: {
					idUtente: user.id,
					nameUtente: data?.name,
					usernameUtente: data?.username,
				},
			});

			router.push("/");
		} catch (e) {
			if (e) {
				// The .code property can be accessed in a type-safe manner
				if (e?.code === "P2002") {
					console.error(
						"There is a unique constraint violation, a new user cannot be created with this username"
					);
				}
			}
			throw e;
		}
	};

	const signInWithMagic = async (email) => {
		let { user, error } = await supabase.auth.signIn({
			email,
		});
		if (error) throw error;

		router.push("/verifica-email");
	};

	const signInWithGoogle = async () => {
		let { user, error } = await supabase.auth.signIn({
			provider: "google",
		});
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
		signUp,
		signOut,
	};
}

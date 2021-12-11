// import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import Auth from "../components/Auth";
import Account from "../components/Account";

import { Button } from "../components";
import Dashboard from "../components/Dashboard";

export default function Home() {
	// const { data: session, status } = useSession();

	const [session, setSession] = useState(null);

	useEffect(() => {
		setSession(supabase.auth.session());

		supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
		});
	}, []);

	return (
		<div className="">
			<Head>
				<title>UniOrari</title>
				<meta name="description" content="Orari delle lezioni" />
			</Head>
			{/* {!session ? (
				<Auth />
			) : (
				<Account key={session.user.id} session={session} />
			)} */}
			{session && <Dashboard />}
			<button
				type="button"
				onClick={() => {
					throw new Error("Sentry Frontend Error");
				}}
			>
				Throw error
			</button>
		</div>
	);
}

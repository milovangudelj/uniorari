import Head from "next/head";

import Dashboard from "../components/Dashboard";
import { useAuth } from "../lib/auth";

export default function Home() {
	const { user, loading } = useAuth();

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
			{user && <Dashboard />}
		</div>
	);
}

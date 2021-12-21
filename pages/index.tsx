import Head from "next/head";
import { useState } from "react";

import Dashboard from "../components/Dashboard";
import { useAuth } from "../lib/auth";
import { supabase } from "../lib/supabase";

export default function Home() {
	const { user, loading } = useAuth();
	const [queryData, setQueryData] = useState(null);

	const handleClick = async () => {
		const { data } = await supabase.from("users").select("id, email");
		setQueryData(data);
	};

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
			<button onClick={handleClick}>query</button>
			<div>{queryData}</div>
		</div>
	);
}

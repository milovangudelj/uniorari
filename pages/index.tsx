import Head from "next/head";
import { useState } from "react";

import { useAuth } from "../lib/auth";
import { supabase } from "../lib/supabase";

export default function Home() {
	const { user, loading } = useAuth();
	const [queryData, setQueryData] = useState(null);

	return (
		<div className="">
			<Head>
				<title>UniOrari</title>
				<meta name="description" content="Orari delle lezioni" />
			</Head>
			{user && `Welcome ${user.name}.`}
		</div>
	);
}
 
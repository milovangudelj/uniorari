import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";

import { Button } from "../components";

export default function Home() {
	const { data: session, status } = useSession();

	return (
		<div className="">
			<Head>
				<title>UniOrari</title>
				<meta name="description" content="Orari delle lezioni" />
			</Head>
			Home
		</div>
	);
}
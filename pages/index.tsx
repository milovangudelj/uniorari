import Head from "next/head";

import { useAuth } from "../lib/auth";
import { Layout } from "../components";

export default function Home() {
	const { user, loading } = useAuth();

	return (
		<>
			<Head>
				<title>UniOrari</title>
				<meta name="description" content="Orari delle lezioni" />
			</Head>
			<Layout>
				<div className="bg-grey-100 w-full h-full flex items-center justify-center">
					<img
						src="/johntravolta.png"
						alt="Confused John Travolta"
						className="opacity-10 pointer-events-none select-none"
					/>
				</div>
			</Layout>
		</>
	);
}

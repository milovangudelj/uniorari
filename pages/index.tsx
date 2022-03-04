import Head from "next/head";
import Image from "next/image";

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
					<Image
						src="/assets/images/johntravolta.webp"
						alt="Confused John Travolta"
						className="opacity-10"
						width={224}
						height={230}
					/>
				</div>
			</Layout>
		</>
	);
}

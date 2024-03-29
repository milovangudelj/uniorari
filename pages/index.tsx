import Head from "next/head";
import Image from "next/image";

import { useAuth } from "../lib/auth";
import { Layout } from "../components";
import { useScreen } from "../lib/hooks/useScreen";

export default function Home() {
	const { user, loading } = useAuth();
	const screen = useScreen();

	return (
		<>
			<Head>
				<title>UniOrari</title>
				<meta name="description" content="Orari delle lezioni" />
			</Head>
			<Layout>
				<div className="w-full h-full flex items-center justify-center">
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

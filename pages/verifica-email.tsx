import Link from "next/link";
import Head from "next/head";
import { Button } from "../components";

export default function verifyRequest({ baseUrl }) {
	return (
		<div className="w-screen h-screen flex items-center justify-center">
			<Head>
				<title>Verifica | UniOrari</title>
				<meta name="description" content="Orari delle lezioni" />
			</Head>
			<main className="text-body-l text-on-surface-he">
				<h1 className="text-display-s">Controlla la tua mail</h1>
				<p className="text-on-surface-me mt-2 mb-16">
					Per accedere clicca il pulsante che ti abbiamo inviato per mail.
				</p>

				<Button variant="primary">
					<Link href="/">Torna alla Home</Link>
				</Button>
			</main>
		</div>
	);
}

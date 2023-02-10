import Head from "next/head";
import Link from "next/link";
import { Button } from "../components";

const VerificaEmail = ({ baseUrl }) => {
	return (
		<>
			<Head>
				<title>Verifica | UniOrari</title>
				<meta name="description" content="Orari delle lezioni" />
			</Head>
			<div className="w-screen bg-grey-50 dark:bg-grey-900 h-screen flex items-center justify-center">
				<main className="text-body-l text-on-surface-he dark:text-on-primary-he">
					<h1 className="text-display-s">Controlla la tua mail</h1>
					<p className="text-on-surface-me dark:text-on-primary-me mt-2 mb-16">
						Per accedere clicca il pulsante che ti abbiamo inviato per
						mail.
					</p>

					<Button as={Link} href="/">
						Torna alla Home
					</Button>
				</main>
			</div>
		</>
	);
};

export default VerificaEmail;

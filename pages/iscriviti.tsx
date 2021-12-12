import Head from "next/head";

import { ReCAPTCHADisclaimer } from "../components";
import { AuthForm, AuthLayout } from "../components/auth";

const Iscriviti = () => {
	return (
		<AuthLayout>
			<Head>
				<title>Iscriviti | UniOrari</title>
				<meta name="description" content="Orari delle lezioni" />
			</Head>
			<main className="min-w-200 w-full max-w-400 p-2 rounded-lg">
				<AuthForm variant="signup" />
				<ReCAPTCHADisclaimer />
			</main>
		</AuthLayout>
	);
};

export default Iscriviti;

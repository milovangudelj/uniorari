import Head from "next/head";

import { AuthForm, AuthLayout, ReCAPTCHADisclaimer } from "../components/auth";

const Iscriviti = () => {
	return (
		<AuthLayout>
			<Head>
				<title>Iscriviti | UniOrari</title>
				<meta name="description" content="Orari delle lezioni" />
			</Head>
			<main className="min-h-full">
				<AuthForm variant="signup" />
			</main>
		</AuthLayout>
	);
};

export default Iscriviti;
 
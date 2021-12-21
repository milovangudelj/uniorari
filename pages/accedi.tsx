import Head from "next/head";

import { AuthForm, AuthLayout, ReCAPTCHADisclaimer } from "../components/auth";

const Accedi = () => {
	return (
		<AuthLayout>
			<Head>
				<title>Accedi | UniOrari</title>
				<meta name="description" content="Orari delle lezioni" />
			</Head>
			<main className="min-w-200 w-full max-w-400 p-2 rounded-lg">
				<AuthForm variant="signin" />
				<ReCAPTCHADisclaimer />
			</main>
		</AuthLayout>
	);
};

export default Accedi;
 
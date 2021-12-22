import Head from "next/head";

import { AuthForm, AuthLayout, ReCAPTCHADisclaimer } from "../components/auth";

const Accedi = () => {
	return (
		<AuthLayout>
			<Head>
				<title>Accedi | UniOrari</title>
				<meta name="description" content="Orari delle lezioni" />
			</Head>
			<main className="min-h-full">
				<AuthForm variant="signin" />
			</main>
		</AuthLayout>
	);
};

export default Accedi;
 
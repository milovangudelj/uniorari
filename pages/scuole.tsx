import Head from "next/head";

import { Layout } from "../components";

const Scuole = () => {
	return (
		<Layout>
			<Head>
				<title>Corsi – UniOrari</title>
				<meta name="description" content="Orari delle lezioni" />
			</Head>
			<div className="flex justify-between items-end mb-6">
				<h1 className="text-4xl font-bold">Scuole</h1>
			</div>
		</Layout>
	);
};

export default Scuole;

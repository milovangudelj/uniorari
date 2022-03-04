import Head from "next/head";

import { Layout } from "../components";

const Lezioni = () => {
	return (
		<Layout>
			<Head>
				<title>Corsi – UniOrari</title>
				<meta name="description" content="Orari delle lezioni" />
			</Head>
			<div className="flex justify-between items-end mb-6">
				<h1 className="text-4xl font-bold">Lezioni</h1>
			</div>
		</Layout>
	);
};

export default Lezioni;

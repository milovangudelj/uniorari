import { useQuery } from "@apollo/client";
import Head from "next/head";
import { useEffect, useState } from "react";

import { CardDocente, Layout } from "../components";
import { queryDocenti } from "../graphql/queries";
import { Docente } from "../graphql/types/ts";

const dataDocenti: Docente[] = [
	{
		id: "1",
		nome: "Giorgio Maria",
		cognome: "Di Nunzio",
		email: "giorgiomaria.dinunzio@unipd.it",
		// immagine:
		// 	"https://persone.csia.unipd.it/persone/foto/B7D48BA95AFD879BF7692148F97AD30B.jpg",
		corsi: [
			{
				id: "1",
				insegnamento: {
					nome: "Basi di Dati 1",
				},
			},
		],
		lezioni: [],
	},
];

const Docenti = () => {
	const { data, loading, error } = useQuery(queryDocenti);
	const [docenti, setDocenti] = useState<Docente[]>(data?.docenti || []);

	useEffect(() => {
		setDocenti(data?.docenti || []);
	}, [data]);

	return (
		<Layout>
			<Head>
				<title>Corsi – UniOrari</title>
				<meta name="description" content="Orari delle lezioni" />
			</Head>
			<h1 className="text-4xl font-bold mb-6">Docenti</h1>
			<section className="flex justify-center">
				<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
					{docenti.length !== 0 ? (
						docenti.map((docente) => {
							return <CardDocente key={docente.id} data={docente} />;
						})
					) : (
						<span>Nessun docente trovato...</span>
					)}
				</div>
			</section>
		</Layout>
	);
};

export default Docenti;

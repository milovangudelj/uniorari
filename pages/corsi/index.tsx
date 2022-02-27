import Head from "next/head";
import useSWR, { useSWRConfig } from "swr";

import apolloClient from "../../lib/apollo";
import { queryCorsi } from "../../graphql/queries";
import { CardCorso } from "../../components";

const API = "/api/corsi";

export async function getServerSideProps() {
	const { data: coursesInfo } = await apolloClient.query({
		query: queryCorsi,
	});

	return {
		props: {
			fallback: {
				[API]: coursesInfo,
			},
		},
	};
}

const Corsi = () => {
	const { data, error } = useSWR(API);

	return (
		<div className="">
			<Head>
				<title>Corsi | UniOrari</title>
				<meta name="description" content="Orari delle lezioni" />
			</Head>
			<h1 className="text-4xl font-bold mb-6">Corsi</h1>
			<section className="flex justify-center">
				<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
					{data?.insegnamenti.map((insegnamento, idx) => (
						<CardCorso key={idx} data={insegnamento} />
					))}
				</div>
			</section>
		</div>
	);
};

export default Corsi;

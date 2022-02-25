import Head from "next/head";
import useSWR, { useSWRConfig } from "swr";
import { CardCorso } from "../../components";

const Corsi = ({ fallback }) => {
	const { fetcher } = useSWRConfig();
	const { data } = useSWR("/api/corsi", fetcher);

	return (
		<div className="">
			<Head>
				<title>Corsi | UniOrari</title>
				<meta name="description" content="Orari delle lezioni" />
			</Head>
			<h1 className="text-4xl font-bold mb-6">Corsi</h1>
			<section className="flex justify-center">
				<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
					{data?.corsi.map((corso, idx) => (
						<CardCorso key={idx} data={corso} />
					))}
				</div>
			</section>
		</div>
	);
};

export default Corsi;

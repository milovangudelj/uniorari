import Head from "next/head";
import useSWR, { useSWRConfig } from "swr";
import { CardCorso } from "../../components";

const Corsi = ({ fallback }) => {
	const { fetcher } = useSWRConfig();
	const { data } = useSWR("/api/corsi", fetcher);

	return (
		<div className="bg-grey-50 font-sans">
			<Head>
				<title>Corsi | UniOrari</title>
				<meta name="description" content="Orari delle lezioni" />
			</Head>
			<section className="flex justify-center py-4">
				<div className="w-full max-w-7xl m-4 grid grid-cols-2 gap-14">
					{data?.corsi.map((corso, idx) => (
						<CardCorso key={idx} corso={corso} />
					))}
				</div>
			</section>
		</div>
	);
};

export default Corsi;

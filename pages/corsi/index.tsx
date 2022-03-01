import Head from "next/head";
import useSWR, { useSWRConfig } from "swr";

import apolloClient from "../../lib/apollo";
import { queryCorsi } from "../../graphql/queries";
import { CardCorso } from "../../components";
import { useEffect, useState } from "react";
import {
	FilterIcon,
	SortAscendingIcon,
	SortDescendingIcon,
	ViewGridIcon,
	ViewListIcon,
} from "@heroicons/react/solid";

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

enum orderingType {
	default,
	alphabetical,
	reverse,
}

const Corsi = () => {
	const { data, error } = useSWR(API);
	const [ordering, setOrdering] = useState(orderingType.default);
	const [insegnamenti, setInsegnamenti] = useState<any[]>(data.insegnamenti);

	useEffect(() => {
		setInsegnamenti((current) =>
			ordering === orderingType.default
				? [...data.insegnamenti]
				: [...current].sort(sortFunction)
		);
	}, [data, ordering]);

	const changeOrdering = () => {
		setOrdering((current) => {
			switch (current) {
				case orderingType.alphabetical:
					return orderingType.reverse;
					break;
				case orderingType.reverse:
					return orderingType.default;
					break;
				default:
					return orderingType.alphabetical;
					break;
			}
		});
	};

	const sortFunction = (a, b) => {
		switch (ordering) {
			case orderingType.alphabetical:
				return a.nome.localeCompare(b.nome);
				break;
			case orderingType.reverse:
				return -a.nome.localeCompare(b.nome);
				break;
			default:
				return 1;
				break;
		}
	};

	return (
		<div>
			<Head>
				<title>Corsi | UniOrari</title>
				<meta name="description" content="Orari delle lezioni" />
			</Head>
			<div className="flex justify-between items-end mb-6">
				<h1 className="text-4xl font-bold">Corsi</h1>
				<div className="flex space-x-4">
					{/* <span className="text-on-surface-he">
						<ViewGridIcon className="w-5 h-5 cursor-pointer" />
					</span>
					<span className="text-on-surface-me hover:text-on-surface-he transition">
						<ViewListIcon className="w-5 h-5 cursor-pointer" />
					</span> */}
					<span
						onClick={changeOrdering}
						className="text-on-surface-me hover:text-on-surface-he transition"
					>
						{ordering === orderingType.default ? (
							<FilterIcon className="w-5 h-5 cursor-pointer" />
						) : ordering === orderingType.alphabetical ? (
							<SortAscendingIcon className="w-5 h-5 cursor-pointer" />
						) : (
							<SortDescendingIcon className="w-5 h-5 cursor-pointer" />
						)}
					</span>
				</div>
			</div>
			<section className="flex justify-center">
				<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
					{insegnamenti.map((insegnamento) => (
						<CardCorso key={insegnamento.id} data={insegnamento} />
					))}
				</div>
			</section>
		</div>
	);
};

export default Corsi;

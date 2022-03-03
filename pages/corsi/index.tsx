import Head from "next/head";
import useSWR, { Key, Fetcher } from "swr";
import { useEffect, useState } from "react";
import {
	FilterIcon,
	SortAscendingIcon,
	SortDescendingIcon,
} from "@heroicons/react/solid";

import {
	CardInsegnamento,
	CardInsegnamentoSkeleton,
	Layout,
} from "../../components";
import { Insegnamento } from "../../graphql/types/ts";
import { order, sortInsegnamenti, useSorting } from "../../lib/hooks";

const API: string = "/api/corsi";

const Corsi = () => {
	const { data, error } = useSWR(API);
	const {
		sortedItems: sortedInsegnamenti,
		ordering,
		changeOrdering,
		setSortedItems,
	} = useSorting({
		type: order.az,
		items: data?.insegnamenti,
		compareFn: sortInsegnamenti,
	});

	useEffect(() => {
		if (!data) return;
		setSortedItems(data.insegnamenti);
	}, [data]);

	return (
		<Layout>
			<div>
				<Head>
					<title>Corsi – UniOrari</title>
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
							{ordering === order.initial ? (
								<FilterIcon className="w-5 h-5 cursor-pointer" />
							) : ordering === order.az ? (
								<SortAscendingIcon className="w-5 h-5 cursor-pointer" />
							) : (
								<SortDescendingIcon className="w-5 h-5 cursor-pointer" />
							)}
						</span>
					</div>
				</div>
				<section className="flex justify-center">
					<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
						{sortedInsegnamenti ? (
							sortedInsegnamenti.map((insegnamento) => (
								<CardInsegnamento
									key={insegnamento.id}
									data={insegnamento}
								/>
							))
						) : (
							<>
								<CardInsegnamentoSkeleton />
								<CardInsegnamentoSkeleton />
								<CardInsegnamentoSkeleton />
							</>
						)}
					</div>
				</section>
			</div>
			<span className="inline-block mt-6 text-sm text-gray-500">
				I dati mostrati fanno riferimento all&apos;anno accademico 2021/2022
			</span>
		</Layout>
	);
};

export default Corsi;

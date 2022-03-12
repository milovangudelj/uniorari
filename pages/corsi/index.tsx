import { useEffect, useState } from "react";
import Head from "next/head";
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
import { useAuth } from "../../lib/auth";
import {
	sortTeachings,
	useSorting,
	useTeachings,
	useSavedCourses,
} from "../../lib/hooks";

const Corsi = () => {
	const { user } = useAuth();
	const { teachings } = useTeachings();
	const { savedCoursesIds, saveCourse } = useSavedCourses(user?.id);
	const {
		sortedItems: sortedTeachings,
		ordering,
		changeOrdering,
		setSortedItems,
	} = useSorting({
		type: "az",
		items: teachings,
		compareFn: sortTeachings,
	});

	useEffect(() => {
		setSortedItems(teachings);
	}, [teachings, setSortedItems]);

	const handleSave = async (idCorso: string) => {
		return await saveCourse(idCorso);
	};

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
							className="text-on-surface-me hover:text-on-surface-he dark:text-on-primary-me dark:hover:text-on-primary-he transition"
						>
							{ordering === "initial" ? (
								<FilterIcon className="w-5 h-5 cursor-pointer" />
							) : ordering === "az" ? (
								<SortAscendingIcon className="w-5 h-5 cursor-pointer" />
							) : (
								<SortDescendingIcon className="w-5 h-5 cursor-pointer" />
							)}
						</span>
					</div>
				</div>
				<section className="flex justify-center">
					<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
						{sortedTeachings ? (
							sortedTeachings.map((insegnamento) => (
								<CardInsegnamento
									key={insegnamento.id}
									data={insegnamento}
									saved={savedCoursesIds}
									handleSave={handleSave}
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
			<span className="inline-block mt-6 text-sm text-on-surface-le dark:text-on-primary-le">
				I dati mostrati fanno riferimento all&apos;anno accademico 2021/2022
			</span>
		</Layout>
	);
};

export default Corsi;

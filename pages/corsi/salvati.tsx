import Head from "next/head";
import { gql, useMutation, useQuery } from "@apollo/client";

import apolloClient from "../../lib/apollo";
import { supabase } from "../../lib/supabase";
import {
	CardCorso,
	CardInsegnamento,
	CardInsegnamentoSkeleton,
	Layout,
} from "../../components";
import { useEffect, useState } from "react";
import { Corso } from "../../graphql/types/ts";
import { useAuth } from "../../lib/auth";
import { removeCourseFromProfile } from "../../graphql/queries/removeCourseFromProfile";
import useSWR from "swr";
import { ExclamationIcon } from "@heroicons/react/solid";
import Link from "next/link";

export const getServerSideProps = async (ctx) => {
	const { user } = await supabase.auth.api.getUserByCookie(ctx.req);
	if (!user) {
		return {
			redirect: {
				destination: "/accedi",
				permanent: false,
			},
		};
	}

	return {
		props: {
			idProfilo: user.id,
		},
	};
};

const API: string = "/api/corsi-salvati";

const Salvati = () => {
	const { user } = useAuth();
	const { data, error } = useSWR(() =>
		user ? `${API}?idProfilo=${user.id}` : null
	);
	const [removeCourse, { loading: mutationLoading, error: mutationError }] =
		useMutation(removeCourseFromProfile);
	const [corsi, setCorsi] = useState<Corso[]>(data?.profilo.corsi);

	useEffect(() => {
		setCorsi(data?.profilo.corsi);
	}, [data]);

	const handleRemove = async (idCorso: string): Promise<boolean> => {
		removeCourse({
			variables: { idProfilo: user.id, idCorso },
		});

		if (mutationError) return false;
		return true;
	};

	return (
		<Layout>
			<Head>
				<title>I miei corsi – UniOrari</title>
				<meta name="description" content="Orari delle lezioni" />
			</Head>
			<h1 className="text-4xl font-bold mb-6">I miei corsi</h1>
			<section className="">
				{error && (
					<span className="inline-flex gap-3 items-center px-4 py-2 h-min bg-red-50 text-red-900 border border-red-900 rounded-lg dark:bg-red-500/10 dark:text-red-400 dark:border-red-400">
						<span>
							<ExclamationIcon className="h-5 w-5" />
						</span>
						<span>
							C&apos;è stato un errore durante il recupero dei tuoi
							corsi. Riprova più tardi.
						</span>
					</span>
				)}
				<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
					{!data && (
						<>
							<CardInsegnamentoSkeleton />
							<CardInsegnamentoSkeleton />
							<CardInsegnamentoSkeleton />
						</>
					)}
					{corsi &&
						corsi.map((corso) => {
							return (
								<CardCorso
									key={corso.id}
									data={corso}
									removable
									handleRemove={handleRemove}
								/>
							);
						})}
					{data && corsi.length === 0 && (
						<span className="text-on-surface-me dark:text-on-primary-me">
							Non hai ancora salvato nessun corso. Puoi farlo dalla
							pagina dei{" "}
							<Link href="/corsi" passHref>
								<a className="text-primary-500 dark:text-primary-400">
									corsi
								</a>
							</Link>
							.
						</span>
					)}
				</div>
			</section>
		</Layout>
	);
};

export default Salvati;

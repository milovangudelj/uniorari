import Head from "next/head";
import { gql, useQuery } from "@apollo/client";

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

const getMyCoursesQuery = gql`
	query ($idProfilo: ID) {
		profilo(id: $idProfilo) {
			corsi {
				id
				nome
				canale {
					nome
				}
				responsabile {
					nome
					cognome
					email
				}
				lezioni {
					giorno
					inizio
					fine
					aule {
						nome
						indirizzo
						link
					}
				}
			}
		}
	}
`;

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

const Salvati = ({ idProfilo }) => {
	const { data, loading, error } = useQuery(getMyCoursesQuery, {
		variables: {
			idProfilo,
		},
	});
	const [corsi, setCorsi] = useState<Corso[]>(data?.profilo.corsi || []);

	useEffect(() => {
		setCorsi(data?.profilo.corsi);
	}, [data]);

	return (
		<Layout>
			<Head>
				<title>I miei corsi – UniOrari</title>
				<meta name="description" content="Orari delle lezioni" />
			</Head>
			<h1 className="text-4xl font-bold mb-6">I miei corsi</h1>
			<section className="flex justify-center">
				<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
					{loading && (
						<>
							<CardInsegnamentoSkeleton />
							<CardInsegnamentoSkeleton />
							<CardInsegnamentoSkeleton />
						</>
					)}
					{corsi &&
						corsi.map((corso) => {
							return <CardCorso key={corso.id} data={corso} />;
						})}
				</div>
			</section>
		</Layout>
	);
};

export default Salvati;

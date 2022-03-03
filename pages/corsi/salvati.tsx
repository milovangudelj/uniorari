import Head from "next/head";
import { gql } from "@apollo/client";

import apolloClient from "../../lib/apollo";
import { supabase } from "../../lib/supabase";
import { Layout } from "../../components";

const getCourses = gql`
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

	const { data, error } = await apolloClient.query({
		query: getCourses,
		variables: {
			idProfilo: user.id,
		},
	});
	if (error) return { props: {} };

	const corsi = data.profilo.corsi;

	return {
		props: {
			corsi,
		},
	};
};

const Salvati = ({ corsi }) => {
	return (
		<Layout>
			<Head>
				<title>I miei corsi – UniOrari</title>
				<meta name="description" content="Orari delle lezioni" />
			</Head>
			<h1>I miei corsi</h1>
			<div>
				{corsi.map((corso) => {
					return <div key={corso.id}>{corso.nome}</div>;
				})}
			</div>
		</Layout>
	);
};

export default Salvati;

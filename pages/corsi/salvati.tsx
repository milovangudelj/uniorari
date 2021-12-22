import { gql } from "@apollo/client";

import apolloClient from "../../lib/apollo";
import { useAuth } from "../../lib/auth";
import { supabase } from "../../lib/supabase";

const getCoursesIds = gql`
	query ($idUtente: String) {
		utente(id: $idUtente) {
			corsi {
				id
			}
		}
	}
`;

const getCourseInfo = gql`
	query ($idCorso: String!) {
		corso(idCorso: $idCorso) {
			nome
			docenti {
				nome
				cognome
				email
			}
			gruppi {
				nome
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
		query: getCoursesIds,
		variables: {
			idUtente: user.id,
		},
	});
	if (error) return { props: {} };

	const corsi = data.utente.corsi?.map(async (id) => {
		const res = await apolloClient.query({
			query: getCourseInfo,
			variables: {
				idCorso: id,
			},
		});
		return res.data.corso;
	});

	return {
		props: {
			corsi,
		},
	};
};

const Salvati = (props) => {
	return (
		<div>
			<h1>I miei corsi</h1>
			<div>{JSON.stringify(props.corsi)}</div>
		</div>
	);
};

export default Salvati;

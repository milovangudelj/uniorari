import { gql, useQuery } from "@apollo/client";
import apolloClient from "../../lib/apollo";

const queryCorsi = gql`
	query queryCorsi {
		corsi {
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

export default async function handler(req, res) {
	const { data, loading, error } = await apolloClient.query({
		query: queryCorsi,
	});

	if (error) res.status(400).json({ error });

	res.status(200).json(data);
}

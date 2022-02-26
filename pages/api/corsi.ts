import { gql } from "@apollo/client";
import apolloClient from "../../lib/apollo";

const queryCorsi = gql`
	query queryCorsi {
		corsi {
			nome
			insegnamento {
				nome
			}
			canale {
				nome
			}
			responsabile {
				nome
				cognome
				email
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

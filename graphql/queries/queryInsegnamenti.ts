import { gql } from "@apollo/client";

export const queryInsegnamenti = gql`
	query queryInsegnamenti {
		insegnamenti {
			id
			createdAt
			nome
			semestre
			corsi {
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

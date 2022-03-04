import { gql } from "@apollo/client";

export const queryDocenti = gql`
	query queryDocenti {
		docenti {
			id
			nome
			cognome
			email
			immagine
			corsi {
				id
				insegnamento {
					nome
				}
			}
		}
	}
`;

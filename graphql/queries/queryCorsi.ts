import { gql } from "@apollo/client";

export const queryCorsi = gql`
	query queryCorsi {
		insegnamenti {
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

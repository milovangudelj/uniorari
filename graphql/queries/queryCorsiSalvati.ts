import { gql } from "@apollo/client";

export const queryCorsiSalvati = gql`
	query queryCorsiSalvati($idProfilo: ID) {
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
				insegnamento {
					semestre
				}
			}
		}
	}
`;

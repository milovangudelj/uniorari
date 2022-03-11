import { gql } from "@apollo/client";

export const queryIdsCorsiSalvati = gql`
	query queryIdsCorsiSalvati($idProfilo: ID) {
		profilo(id: $idProfilo) {
			corsi {
				id
			}
		}
	}
`;

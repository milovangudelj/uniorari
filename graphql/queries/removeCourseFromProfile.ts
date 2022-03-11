import { gql } from "@apollo/client";

export const removeCourseFromProfile = gql`
	mutation removeCourseFromProfile($idProfilo: ID!, $idCorso: ID!) {
		rimuoviCorsoDaProfilo(idProfilo: $idProfilo, idCorso: $idCorso) {
			id
			username
			corsi {
				id
				nome
			}
		}
	}
`;

import { gql } from "@apollo/client";

export const addCourseToProfile = gql`
	mutation addCourseToProfile($idProfilo: ID!, $idCorso: ID!) {
		aggiungiCorsoAProfilo(idProfilo: $idProfilo, idCorso: $idCorso) {
			id
			username
			corsi {
				nome
			}
		}
	}
`;

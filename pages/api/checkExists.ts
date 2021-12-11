import { withSentry } from "@sentry/nextjs";
import { gql } from "@apollo/client";

import apolloClient from "../../lib/apollo";

const queryEmailUtente = gql`
	query ($emailUtente: String!) {
		users(where: { email: { _eq: $emailUtente } }) {
			email
		}
	}
`;

const queryUsernameUtente = gql`
	query ($usernameUtente: String!) {
		users(where: { username: { _eq: $usernameUtente } }) {
			name
		}
	}
`;

const handler = async (req, res) => {
	const { email, username } = req.query;

	const res1 = await apolloClient.query({
		query: queryEmailUtente,
		variables: { emailUtente: email },
	});

	const res2 = await apolloClient.query({
		query: queryUsernameUtente,
		variables: { usernameUtente: username },
	});

	res.status(200).json({
		email: res1.data.utente !== null && !res1.error,
		username: res2.data.utente !== null && !res2.error,
	});
};

export default withSentry(handler);

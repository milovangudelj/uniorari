import { withSentry } from "@sentry/nextjs";
import { gql } from "@apollo/client";

import apolloClient from "../../lib/apollo";

const queryEmailUtente = gql`
	query ($email: String) {
		utente(email: $email) {
			email
		}
	}
`;

const queryUsernameUtente = gql`
	query ($username: String) {
		utente(username: $username) {
			username
		}
	}
`;

const handler = async (req, res) => {
	const { from, ...args } = req.query;

	console.log({ from, ...args });

	res.status(200).json("recieved hook call");
};

export default withSentry(handler);

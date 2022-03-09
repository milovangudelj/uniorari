import { gql } from "@apollo/client";

import apolloClient from "../../lib/apollo";

const queryEmailUtente = gql`
	query ($email: String) {
		profilo(email: $email) {
			email
		}
	}
`;

const queryUsernameUtente = gql`
	query ($username: String) {
		profilo(username: $username) {
			username
		}
	}
`;

const handler = async (req, res) => {
	const { email, username } = req.query;

	const emailCheck = await apolloClient.query({
		query: queryEmailUtente,
		variables: { email: email },
	});

	const usernameCheck = await apolloClient.query({
		query: queryUsernameUtente,
		variables: { username: username },
	});

	const output: {
		email?: boolean;
		username?: boolean;
	} = {};
	if (email)
		output.email = emailCheck.data.profilo !== null && !emailCheck.error;
	if (username)
		output.username =
			usernameCheck.data.profilo !== null && !usernameCheck.error;

	res.status(200).json(output);
};

export default handler;

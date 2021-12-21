import { withSentry } from "@sentry/nextjs";
import { gql } from "@apollo/client";

import apolloClient from "../../lib/apollo";
import { supabaseAdmin } from "../../lib/supabase-admin";

const handler = async (req, res) => {
	const { id, name, username, email, image } = req.query;

	console.log({ id, name, username, email, image });

	// If the user is created from a signup form then call the postgres function
	if (!id) {
		const { data, error } = await supabaseAdmin.rpc("create_public_user", {
			name_input: name,
			username_input: username,
			email_input: email,
		});
		res.status(200).json({ data, errors: [error] });
	}

	let createUserMutation = gql`
		mutation (
			$id: ID!
			$name: String!
			$username: String!
			$email: String!
			$image: String
		) {
			creaUtente(
				id: $id
				name: $name
				email: $email
				username: $username
				image: $image
			) {
				id
			}
		}
	`;

	// If the user is created with the google button then add his data in the table
	const { data, errors } = await apolloClient.mutate({
		mutation: createUserMutation,
		variables: {
			id,
			name,
			username,
			email,
			image,
		},
	});

	res.status(200).json({ data, errors });
};

export default withSentry(handler);

import { withSentry } from "@sentry/nextjs";
import { gql } from "@apollo/client";

import apolloClient from "../../lib/apollo";
import { supabaseAdmin } from "../../lib/supabase-admin";

const handler = async (req, res) => {
	console.log("Trying to create a new user...");
	const params = req.query;

	if (!params.id_input) {
		const { data, error } = await supabaseAdmin.rpc("create_public_user", {
			name_input: params.name_input,
			username_input: params.username_input,
			email_input: params.email_input,
		});
		res.status(200).json({ data, errors: [error] });
	}

	let createUserMutation = gql`
		mutation (
			$id: ID!
			$name: String!
			$email: String!
			$username: String!
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

	const { data, errors } = await apolloClient.mutate({
		mutation: createUserMutation,
		variables: {
			id: params.id_input,
			name: params.name_input,
			username: params.username_input,
			email: params.email_input,
			image: params.image_input,
		},
	});

	console.log(data);

	res.status(200).json({ data, errors });
};

export default withSentry(handler);

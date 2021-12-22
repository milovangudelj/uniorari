import { withSentry } from "@sentry/nextjs";
import { gql } from "@apollo/client";

import apolloClient from "../../lib/apollo";
import { supabase } from "../../lib/supabase";

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
	const user = await supabase.auth.user();

	console.log("user", user);

	const identityData = user.identities.find(
		(identity) => identity.provider === "google"
	).identity_data;

	console.log(identityData);

	let updated = await supabase.auth.update({
		data: {
			name: identityData.full_name,
			username: identityData.full_name
				.toLowerCase()
				.replaceAll(" ", "_")
				.replaceAll(".", ""),
		},
	});
	if (updated.error)
		return res
			.status(200)
			.json({ error: updated.error, errors: [updated.error] });

	const { error } = await supabase.rpc("complete_user_after_signup");
	if (error) return res.status(200).json({ error });

	res.redirect(307, "/");
};

const completeUser = async (user) => {
	const updateQuery = gql`
		mutation Mutation($id: String!, $name: String, $username: String) {
			modificaUtente(id: $id, name: $name, username: $username) {
				id
			}
		}
	`;

	console.log({
		id: user.id,
		name: user.user_metadata.name,
		username: user.user_metadata.username,
	});

	const completed = await apolloClient.mutate({
		mutation: updateQuery,
		variables: {
			id: user.id,
			name: user.user_metadata.name,
			username: user.user_metadata.username,
		},
	});
	if (completed.errors)
		return { error: completed.errors[0], errors: completed.errors };

	console.log("User updated successfully.");
	return { error: null, errors: null };
};

export default withSentry(handler);
 
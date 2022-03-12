import apolloClient from "../../lib/apollo";
import { queryInsegnamenti } from "../../graphql/queries";

export default async function handler(req, res) {
	const { data, loading, error } = await apolloClient.query({
		query: queryInsegnamenti,
	});

	if (error) res.status(400).json({ error });

	res.status(200).json(data);
}

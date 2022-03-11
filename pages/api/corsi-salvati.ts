import { supabase } from "../../lib/supabase";
import apolloClient from "../../lib/apollo";
import { queryCorsiSalvati } from "../../graphql/queries";

export default async function handler(req, res) {
	const { user } = await supabase.auth.api.getUserByCookie(req);
	const { idProfilo } = req.query;

	if (!user || user.id !== idProfilo) {
		res.status(401).json({ status: 401, reason: "Unauthorised!" });
		return;
	}

	const { data, error } = await apolloClient.query({
		query: queryCorsiSalvati,
		variables: {
			idProfilo,
		},
	});

	if (error) {
		res.status(400).json({ error });
		return;
	}

	res.status(200).json(data);
}

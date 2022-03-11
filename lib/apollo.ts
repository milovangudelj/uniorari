import { ApolloClient, InMemoryCache } from "@apollo/client";
import { PATH } from "./constants";

const apolloClient = new ApolloClient({
	uri: PATH + "/api/graphql",
	cache: new InMemoryCache({
		typePolicies: {
			Profilo: {
				fields: {
					corsi: {
						merge(existing = [], incoming: any) {
							return { ...existing, ...incoming };
						},
					},
				},
			},
		},
	}),
});

export default apolloClient;

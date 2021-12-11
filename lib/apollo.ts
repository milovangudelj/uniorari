import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache,
	HttpLink,
} from "@apollo/client";

const path =
	process.env.NODE_ENV === "development"
		? "http://localhost:3000"
		: "https://uniorari.it";

const apolloClient = new ApolloClient({
	link: new HttpLink({
		uri: "https://uniorari.hasura.app/v1/graphql",
		headers: {
			"Content-Type": "application/json",
			"x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET,
		},
	}),
	cache: new InMemoryCache(),
});

export default apolloClient;

import { ApolloClient, InMemoryCache } from "@apollo/client";

const path =
	process.env.NODE_ENV === "development"
		? "http://localhost:3000"
		: "https://orari-unipd.vercel.app";

const apolloClient = new ApolloClient({
	uri: path + "/api/graphql",
	cache: new InMemoryCache(),
});

export default apolloClient;

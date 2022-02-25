import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { PATH } from "./constants";

const origin = typeof window !== "undefined" ? window.origin : PATH;

const apolloClient = new ApolloClient({
	uri: origin + "/api/graphql",
	cache: new InMemoryCache(),
});

export default apolloClient;

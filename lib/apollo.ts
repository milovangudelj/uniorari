import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { PATH } from "./constants";

const httpLink = new HttpLink({ uri: "/api/graphql" });

const apolloClient = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
});

export default apolloClient;

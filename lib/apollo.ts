import { ApolloClient, InMemoryCache } from "@apollo/client";
import { PATH } from "./constants";

const apolloClient = new ApolloClient({
	uri: PATH + "/api/graphql",
	cache: new InMemoryCache(),
});

export default apolloClient;

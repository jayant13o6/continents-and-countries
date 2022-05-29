import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
// import { RestLink } from "apollo-link-rest";

// const httpLink = new httpLink({
//   uri: "https://countries.trevorblades.com/",
// });

// const client = new ApolloClient({
//   uri: "https://countries.trevorblades.com/",
//   cache: new InMemoryCache(),
// });

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com/",
});

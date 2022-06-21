import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o7lgy610iv01xxb3s4bivt/master',
  cache: new InMemoryCache(),
});
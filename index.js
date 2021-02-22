import { ApolloServer, gql } from 'apollo-server';
import fs from 'fs';

import resolvers from './resolvers.js';

const typeDefs = gql(fs.readFileSync('./schema.graphql', {encoding: 'utf8'}));




// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });


server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
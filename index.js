import { ApolloServer, gql } from 'apollo-server';
import fs from 'fs';

import resolvers from './src/resolvers.js';

const typeDefs = [
  gql(fs.readFileSync('./src/typedefs/model.graphql', {encoding: 'utf8'})),
	gql(fs.readFileSync('./src/typedefs/schema.graphql', {encoding: 'utf8'})),
]


const server = new ApolloServer({ typeDefs, resolvers });


server.listen({ port: 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
});
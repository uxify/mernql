import { ApolloServer, gql } from 'apollo-server';

import { pages } from './data/pages.js';

const typeDefs = gql`
  type Page {
    id: Int
    title: String
    description: String
    url: String
    layout: Layout
  }

  type Layout {
    id: Int
    name: String
  }
  

  type Query {
    pages: [Page]
    layouts: [Layout]
  }
`;


// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    pages: () => pages,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
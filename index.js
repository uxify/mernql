const { ApolloServer, gql } = require('apollo-server');

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

const layouts = [
  {
    id: 1,
    name: "Single Page"
  }
]

const pages = [
  {
    id: 1,
    title: "Home",
    description: "Home Page",
    url: "/",
    layout: layouts[0]
  }
]
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
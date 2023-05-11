const graphql = require("graphql");
const query = require("./Queries/UserQuery");
const { GraphQLObjectType, GraphQLSchema } = graphql;

const RootQuery = new GraphQLObjectType({
  name: "GraphQL",
  fields: {
    usersRecord: query.getAllUsers,
  },
});

module.exports = new GraphQLSchema({ query: RootQuery });

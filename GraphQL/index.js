const graphql = require("graphql");
const query = require("./Queries/UserQuery");
const mutation = require("./Mutations/userMutation");
const { GraphQLObjectType, GraphQLSchema } = graphql;
const RootQuery = new GraphQLObjectType({
 name: "query",
 fields: {
  usersRecord: query.getAllUsers,
 },
});

const Mutation = new GraphQLObjectType({
 name: "mutation",
 fields: {
  createUser: mutation.addUser,
 },
});
module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });

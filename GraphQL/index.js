const graphql = require("graphql");
const query = require("./Queries/UserQuery");
const mutation = require("./Mutations/userMutation");
const { GraphQLObjectType, GraphQLSchema } = graphql;
const RootQuery = new GraphQLObjectType({
 name: "query",
 fields: {
  usersRecord: query.getAllUsers,
  userDetails: query.getOneUser
 },
});

const Mutation = new GraphQLObjectType({
 name: "mutation",
 fields: {
  createUser: mutation.addUser,
  updateUser: mutation.updateUser,
  deleteUser: mutation.deleteUser
 },
});
module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
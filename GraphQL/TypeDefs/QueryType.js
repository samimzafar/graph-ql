const { GraphQLObjectType, GraphQLList, GraphQLInt } = require("graphql");
const { getAllUsers, getOneUser } = require("../Queries/UserQuery");
const { UserType } = require("./Type");

const QueryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    usersRecord: {
      type: new GraphQLList(UserType),
      resolve: getAllUsers,
    },
    userDetails: {
      type: new GraphQLList(UserType),
      args: {
        id: { type: GraphQLInt },
      },
      resolve: getOneUser,
    },
  },
});

module.exports = {
  QueryType,
};

const { GraphQLObjectType, GraphQLInt } = require("graphql");
const { getAllUsers, getOneUser } = require("../Queries/UserQuery");
const { UserTypeResponse } = require("./index");

const QueryType = new GraphQLObjectType({
 name: "Query",
 fields: {
  getAll: {
   type: UserTypeResponse,
   resolve: getAllUsers,
  },

  getOne: {
   type: UserTypeResponse,
   args: {
    userId: { type: GraphQLInt },
   },
   resolve: getOneUser,
  },
 },
});

module.exports = {
 QueryType,
};

const { GraphQLObjectType, GraphQLString } = require("graphql");
const { login } = require("../Mutations/UserMutation");
const { successResponse } = require("./ResponseType");

const MutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    userLogin: {
      type: successResponse,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve: login,
    },
  },
});

module.exports = {
  MutationType,
};

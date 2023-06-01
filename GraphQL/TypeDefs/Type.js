const { GraphQLObjectType, GraphQLString, GraphQLInt } = require("graphql");
const schemaUser = "user";
const schemaToken = "token";

const UserType = new GraphQLObjectType({
  name: schemaUser,
  fields: () => ({
    email: { type: GraphQLString },
    role: { type: GraphQLString },
    token_time_stamp: { type: GraphQLInt },
  }),
});

const TokenType = new GraphQLObjectType({
  name: schemaToken,
  fields: () => ({
    signInToken: { type: GraphQLString },
  }),
});


module.exports = { UserType, TokenType };

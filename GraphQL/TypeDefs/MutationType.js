const { GraphQLObjectType, GraphQLString } = require('graphql');
const { login } = require('../Mutations/UserMutation');
const { TokenType } = require("./Type");

const MutationType = new GraphQLObjectType({
 name: 'Mutation',
 fields: {
  userLogin: {
   type: TokenType,
   args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString }
   },
   resolve: login
  }
 },
});

module.exports = {
 MutationType
};

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLList,
} = require("graphql");
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

const UserTypeResponse = new GraphQLObjectType({
  name: "UserTypeResponse",
  fields: () => ({
    status: { type: GraphQLInt },
    success: { type: GraphQLBoolean },
    message: { type: GraphQLString },
    data: { type: new GraphQLList(UserType) },
  }),
});

const TokenType = new GraphQLObjectType({
  name: schemaToken,
  fields: () => ({
    status: { type: GraphQLInt },
    success: { type: GraphQLBoolean },
    message: { type: GraphQLString },
    accessToken: { type: GraphQLString },
  }),
});

module.exports = { UserType, TokenType, UserTypeResponse };

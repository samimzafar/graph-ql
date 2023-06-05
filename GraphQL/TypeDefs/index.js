const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLList,
} = require("graphql");

const schemaUser = "user";
const schemaStudent = "student";
const schemaToken = "token";

const StudentType = new GraphQLObjectType({
  name: schemaStudent,
  fields: () => ({
    id: { type: GraphQLInt },
    admission_id: { type: GraphQLInt },
    roll_id: { type: GraphQLInt },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    phone_number: { type: GraphQLString },
    section: { type: GraphQLString },
    schoolName: { type: GraphQLString },
    className: { type: GraphQLInt },
    transport_number: { type: GraphQLInt },
    alumni: { type: GraphQLBoolean },
    alumni_reason: { type: GraphQLString },
  })
});

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

module.exports = { UserType, TokenType, UserTypeResponse, StudentType };

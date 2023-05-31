const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
} = require("graphql");
const tableUser = "users";
const UserType = new GraphQLObjectType({
  name: tableUser,
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    gender: { type: GraphQLString },
    status: { type: GraphQLString },
    phone: { type: GraphQLString },
    role: { type: GraphQLString },
    archieved: { type: GraphQLBoolean },
  }),
});
module.exports = UserType;

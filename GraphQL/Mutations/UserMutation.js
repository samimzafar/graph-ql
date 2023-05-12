const { GraphQLString } = require("graphql");
const UserType = require("../TypeDefs/UserType");
module.exports = {
 addUser: {
  type: UserType,
  args: {
   name: { type: GraphQLString },
   email: { type: GraphQLString },
   gender: { type: GraphQLString },
   status: { type: GraphQLString },
   phone: { type: GraphQLString },
  },
  resolve: async (parent, args) => {
   const { Models: {
    Users
   } } = parent;
   await Users.create(args);
   return args;
  },
 },
};

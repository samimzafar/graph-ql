const { GraphQLList } = require("graphql");
const UserType = require("../TypeDefs/UserType");
module.exports = {
 getAllUsers: {
  type: new GraphQLList(UserType),
  resolve: async (parent, args, context) => {
   const token = await context();
   console.log(token);
   const { Models: {
    Users
   } } = parent;
   let data = Users.findAll();
   return data;
  },
 },
};

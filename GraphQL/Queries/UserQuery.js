const { GraphQLList, GraphQLInt, GraphQLString } = require("graphql");
const UserType = require("../TypeDefs/UserType");
module.exports = {
  getAllUsers: {
    type: new GraphQLList(UserType),
    resolve: async (parent, args, context) => {
      const {
        Models: { Users },
      } = parent;
      let data = Users.findAll();
      return data;
    },
  },

  getOneUser: {
    type: new GraphQLList(UserType),
    args: {
      name: { type: GraphQLString },
      id: { type: GraphQLInt },
    },
    resolve: async (parent, args) => {
      const { id } = args;
      const {
        Models: { Users },
      } = parent;
      return Users.findAll({ where: { id } });
    },
  },
};

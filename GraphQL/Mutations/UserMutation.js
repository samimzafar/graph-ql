const { GraphQLString, GraphQLInt } = require("graphql");
const UserType = require("../TypeDefs/UserType");
const SuccessResponseType = require("../TypeDefs/SuccessResponseType");
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
      const { Models: { Users }, } = parent;
      await Users.create(args);
      return args;
    },
  },

  updateUser: {
    type: SuccessResponseType,
    args: {
      id: { type: GraphQLInt },
      status: { type: GraphQLString },
      phone: { type: GraphQLString },
    },
    resolve: async (parent, args) => {
      const { id, status, phone } = args;
      const { Models: { Users }, } = parent;
      await Users.update({
        status,
        phone
      }, {
        where: { id },
        silent: true
      });
      return {
        success: true,
        message: "Updated Successfully",
        statusCode: 200,
      };
    }
  },

  deleteUser: {
    type: SuccessResponseType,
    args: {
      id: { type: GraphQLInt },
    },
    resolve: async (parent, args) => {
      const { id, status, phone } = args;
      const { Models: { Users }, } = parent;
      await Users.destroy({
        where: { id }
      });
      return {
        success: true,
        message: "Deleted Successfully",
        statusCode: 200,
      };
    }
  }
};

const { GraphQLString, GraphQLInt } = require("graphql");
const UserType = require("../TypeDefs/UserType");
const SuccessResponseType = require("../TypeDefs/SuccessResponseType");
const { createOtp } = require("../../utils/createOtp");
const { sequelize } = require("../../models");
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
      try {
        const transaction = await sequelize.transaction();
        const {
          Models: { Users, UserOtps },
        } = parent;
        let user = await Users.create(args, {
          transaction,
        });
        user = user && user.get({ plain: true });
        const otp = createOtp();
        await UserOtps.create(
          {
            otp,
            fk_user_id: user.id,
          },
          {
            transaction,
          }
        );
        await transaction.commit();
        return args;
      } catch (error) {
        await transaction.rollback();
      }
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
      const {
        Models: { Users },
      } = parent;
      await Users.update(
        {
          status,
          phone,
        },
        {
          where: { id },
          silent: true,
        }
      );
      return {
        success: true,
        message: "Updated Successfully",
        statusCode: 200,
      };
    },
  },

  deleteUser: {
    type: SuccessResponseType,
    args: {
      id: { type: GraphQLInt },
    },
    resolve: async (parent, args) => {
      const { id, status, phone } = args;
      const {
        Models: { Users },
      } = parent;
      await Users.update({
        archieved: true
      }, {
        where: { id },
      });
      return {
        success: true,
        message: "Deleted Successfully",
        statusCode: 200,
      };
    },
  },
};

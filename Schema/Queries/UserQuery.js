const { GraphQLList } = require("graphql");
const { Users } = require("../../models");
const UserType = require("../TypeDefs/UserType");
module.exports = {
  getAllUsers: {
    type: new GraphQLList(UserType),
    resolve(parent, args) {
      let data = Users.findAll();
      return data;
    },
  },
};

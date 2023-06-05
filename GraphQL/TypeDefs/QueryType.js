const { GraphQLObjectType, GraphQLInt } = require("graphql");
const { getAllStudents, getStudentProfile } = require("../Queries/UserQuery");
const { UserTypeResponse } = require("./index");
const authenticateUser = require("../../middlewares/authenticateUser");

const QueryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    getAllStudents: {
      type: UserTypeResponse,
      resolve: authenticateUser(getAllStudents),
    },

    getStudentProfile: {
      type: UserTypeResponse,
      args: {
        userId: { type: GraphQLInt },
      },
      resolve: authenticateUser(getStudentProfile),
    },
  },
});

module.exports = {
  QueryType,
};

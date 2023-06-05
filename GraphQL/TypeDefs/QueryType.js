const { GraphQLObjectType, GraphQLInt } = require("graphql");
const { getAllStudents, getStudentProfile } = require("../Queries/UserQuery");
const { UserTypeResponse, StudentType } = require("./index");
const authenticateUser = require("../../middlewares/authenticateUser");
const authenticateStudent = require("../../middlewares/authenticateStudent");

const QueryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    getAllStudents: {
      type: UserTypeResponse,
      resolve: authenticateUser(getAllStudents),
    },
    getStudentProfile: {
      type: StudentType,
      args: {
        userId: { type: GraphQLInt },
      },
      resolve: authenticateUser(authenticateStudent(getStudentProfile)),
    },
  },
});

module.exports = {
  QueryType,
};

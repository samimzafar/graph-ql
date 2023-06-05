const { GraphQLObjectType, GraphQLInt } = require("graphql");
const { getAllStudents, getStudentProfile } = require("../Queries/UserQuery");
const { UserTypeResponse } = require("./index");

const QueryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    getAllStudents: {
      type: UserTypeResponse,
      resolve: getAllStudents,
    },

    getStudentProfile: {
      type: UserTypeResponse,
      args: {
        userId: { type: GraphQLInt },
      },
      resolve: getStudentProfile,
    },
  },
});

module.exports = {
  QueryType,
};

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
} = require("graphql");
const dataType = new GraphQLObjectType({
  name: "data",
  fields: () => ({
    accessToken: { type: GraphQLString },
  }),
});
const successResponse = new GraphQLObjectType({
  name: "Success",
  fields: () => ({
    status: { type: GraphQLInt },
    success: { type: GraphQLBoolean },
    message: { type: GraphQLString },
    data: { type: dataType }, // Define your data type accordingly
  }),
});

const errorResponse = new GraphQLObjectType({
  name: "Error",
  fields: () => ({
    status: { type: GraphQLInt },
    success: { type: GraphQLBoolean },
    message: { type: GraphQLString },
  }),
});

module.exports = { successResponse, errorResponse };

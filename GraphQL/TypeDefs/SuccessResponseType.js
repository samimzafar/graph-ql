const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
} = require("graphql");
const SuccessResponseType = new GraphQLObjectType({
  name: "successResponseType",
  fields: () => ({
    success: { type: GraphQLBoolean },
    message: { type: GraphQLString },
    statusCode: { type: GraphQLInt },
  }),
});
module.exports = SuccessResponseType;

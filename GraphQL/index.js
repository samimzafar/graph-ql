const graphql = require('graphql');
const { QueryType } = require("./TypeDefs/QueryType");
const { MutationType } = require("./TypeDefs/MutationType");

const { GraphQLSchema } = graphql;

const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType
});

module.exports = schema;

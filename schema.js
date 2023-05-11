const graphql = require("graphql");
const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList } = graphql;
const UserType = new GraphQLObjectType({
 name: "user",
 fields: () => ({
  id: { type: GraphQLInt },
  name: { type: GraphQLString },
  email: { type: GraphQLString },
  phone: { type: GraphQLInt },
 })
});

const RootQuery = new GraphQLObjectType({
 name: "xyz",
 fields: {
  codeimprove: {
   type: new GraphQLList(UserType),
   resolve(parent, args) {
    let data = [{
     id: 12, name: "codeimprove", email: "code@gmail.com", phone: 12349842
    },
    {
     id: 14, name: "demo", email: "demo@gmail.com", phone: 32324842
    }];
    return data;
   }
  }
 }
});

module.exports = new GraphQLSchema({ query: RootQuery });
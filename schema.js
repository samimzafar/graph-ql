const { Users } = require("./models");
const tableUser = "users";
const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;
const UserType = new GraphQLObjectType({
  name: tableUser,
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    gender: { type: GraphQLString },
    status: { type: GraphQLString },
    createdAt: { type: GraphQLInt },
    updatedAt: { type: GraphQLInt },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "GraphQL",
  fields: {
    userList: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        let data = Users.findAll();
        return data;
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery });

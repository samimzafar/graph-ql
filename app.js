const express = require("express");
const app = express();
const { graphqlHTTP } = require("express-graphql");
const config = require("./config");
const { Users, sequelize } = require("./model");
const graphqlURL = config.get("graphql");
const schema = require("./GraphQL");

const Root = {
  Models: {
    Users,
  },
};

app.use(express.json());
const context = (req) => req.header("Authorization");
app.use(
  graphqlURL,
  graphqlHTTP(async (req, res, next) => ({
    schema,
    rootValue: Root,
    graphiql: true,
    introspection: true,
    playground: true,
    context: () => context(req)
  }))
);
// catch 404
app.use((req, res) => {
  return res.status(404).send({
    status: 404,
    success: false,
    message: `Cannot ${req.method} ${req.url}`,
  });
});

// error handling
app.use((err, req, res) => {
  return res.status(err.status || 500).send({
    status: err.status || 500,
    success: false,
    message: err.message,
  });
});

module.exports = app;

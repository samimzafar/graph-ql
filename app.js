const express = require("express");
const app = express();
const { graphqlHTTP } = require("express-graphql");
const config = require("./config");
const { Users, sequelize } = require("./model");
const graphqlURL = config.get("graphql");
const schema = require("./GraphQL");
//Root is used if you want to pass some variable,DB URL,Ports,accessKey, config keys
//etc so that you can acces from parent param
//here in Root I have passed Models so that anywhere in query i can access any models

const Root = {
  Models: {
    Users,
  },
};

app.use(express.json());
app.use(
  graphqlURL,
  graphqlHTTP(async (req, res, next) => ({
    schema,
    rootValue: Root,
    graphiql: true,
    introspection: true,
    playground: true,
    context: {
      models: sequelize.models,
      req,
      res,
      next,
    },
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

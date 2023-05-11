const express = require("express");
const app = express();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schema/index");
const config = require("./config");
const graphqlURL = config.get("graphql");

app.use(express.json());
app.use(
  graphqlURL,
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
module.exports = app;

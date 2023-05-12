const express = require("express");
const app = express();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./GraphQL/index");
const config = require("./config");
const { Users } = require("./models");
const graphqlURL = config.get("graphql");

//Root is used if you want to pass some variable,DB URL,Ports,accessKey, config keys 
//etc so that you can acces from parent param
//here in Root I have passed Models so that anywhere in query i can access any models

const Root = {
  Models: {
    Users
  }
};

//context is function used to pass  token,headers,Auth etc 
const context = async (req) => {
  const token = "1233422fdsd2312SAESDSD";
  return token;
};
app.use(express.json());
app.use(
  graphqlURL,
  graphqlHTTP(async req => (
    {
      schema,
      rootValue: Root,
      graphiql: true,
      context: () => context(req)
    }
  ))
);
module.exports = app;

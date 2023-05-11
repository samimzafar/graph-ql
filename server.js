const app = require("./app");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
const config = require("./config");

const PORT = config.get("port");
const graphqlURL = config.get("graphql");

app.use(graphqlURL, graphqlHTTP({
 schema,
 graphiql: true
}));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));
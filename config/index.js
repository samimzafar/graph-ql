const convict = require("convict");
convict.addFormat(require("convict-format-with-validator").ipaddress);

var config = convict({
 env: {
  doc: "The application environment.",
  format: ["production", "development", "test"],
  default: "development",
  env: "NODE_ENV",
 },
 port: {
  doc: "The port to bind.",
  format: "port",
  default: 8080,
  env: "PORT",
  arg: "port",
 },
 graphql: {
  doc: "The graphql to bind.",
  format: String,
  default: null,
  env: "GraphQL",
 },
 db: {
  host: {
   doc: "Database host name/IP",
   format: String,
   default: "127.0.0.1",
   env: "DATABASE_HOST",
  },
  name: {
   doc: "Database name",
   format: String,
   default: "database_development",
   env: "DATABASE_NAME",
  },
  username: {
   doc: "db user",
   format: String,
   default: "root",
   env: "DATABASE_USERNAME",
  },
  password: {
   doc: "db password",
   format: "*",
   default: null,
   env: "DATABASE_PASSWORD",
  },
 }
});

// Load environment dependent configuration
let env = config.get("env");
if (env === "development") {
 config.loadFile(__dirname + "/environments/" + env + ".json");
}

// Perform validation
config.validate({ allowed: "strict" });
module.exports = config;
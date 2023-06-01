const jwt = require("jsonwebtoken");

module.exports = {
  encrypt: (data, secret) => jwt.sign({ data }, secret, { expiresIn: "5d" }),
};

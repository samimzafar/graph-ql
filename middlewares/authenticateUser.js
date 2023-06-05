const { Users } = require("../model");
const ApiError = require("../utils/ApiError");
const jwt = require("jsonwebtoken");
const config = require("../config");
const secretKey = config.get("signIn.jwtSecret");
module.exports = (resolverFunction) => {
 return async (parent, args, context, info) => {
  // Retrieve the token from the context
  const token = context();

  // Perform authentication logic with the token
  if (!token) {
   throw new Error("Unauthorized access.");
  }
  const decoded = jwt.verify(token, secretKey);
  const { data } = decoded;
  const user = await Users.findByPk(data.userId);
  if (!user) {
   throw new ApiError(400, "user doesn't exists");
  }
  if (user.id !== data.userId || user.token_time_stamp !== data.timeStamp) {
   throw new ApiError(403, "Invalid token");
  }
  // Call the original resolver function
  return resolverFunction(parent, args, context, info);
 };
};



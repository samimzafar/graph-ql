const { Users } = require("../model");
const ApiError = require("../utils/ApiError");
const jwt = require("jsonwebtoken");
const config = require("../config");
const secretKey = config.get("signIn.jwtSecret");
module.exports = (resolverFunction) => {
 return async (parent, args, context, info) => {
  const token = context();
  const decoded = jwt.verify(token, secretKey);
  if (!token || !decoded) {
   throw new Error("Unauthorized access.");
  }
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



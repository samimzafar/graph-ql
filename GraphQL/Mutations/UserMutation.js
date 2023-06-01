const moment = require("moment");
const { sequelize } = require("../../model");
const { encrypt } = require("../../utils/token");
const config = require("../../config");
const secretKey = config.get("signIn.jwtSecret");
const md5 = require("md5");
module.exports = {
  login: async (parent, args) => {
    const transaction = await sequelize.transaction();
    try {
      const { email, password } = args;
      const hashedPassword = md5(password);
      const {
        Models: { Users },
      } = parent;
      const user = await Users.findOne({
        where: {
          email,
          password: hashedPassword,
        },
      });
      user.token_time_stamp = moment().unix();
      await user.save();
      // Generate a JWT token
      const tokenPayload = {
        userId: user.id,
        timeStamp: user.token_time_stamp,
        role: user.role, // Include the timestamp or version identifier
      };
      const signInToken = encrypt(tokenPayload, secretKey);
      await transaction.commit();
      return { signInToken };
    } catch (error) {
      await transaction.rollback();
    }
  },
};

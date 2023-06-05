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
      const tokenPayload = {
        userId: user.id,
        timeStamp: user.token_time_stamp,
        role: user.role,
      };
      const signInToken = encrypt(tokenPayload, secretKey);
      await transaction.commit();
      return {
        status: 200,
        success: true,
        message: "Login successful",
        data: { accessToken: signInToken },
      };
    } catch (error) {
      await transaction.rollback();
    }
  },
};

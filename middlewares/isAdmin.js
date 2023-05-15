const { Users } = require("../models");
const ApiError = require("../utils/ApiError");
const isAdmin = async (req, res) => {
  try {
    const {
      variables: { id },
    } = req.body;
    let user = await Users.findOne({ where: { id } });
    user = user && user.get({ plain: true });
    if (!user) {
      throw new ApiError(404, "User is not found");
    }
    if (user.role !== "Admin") {
      // throw new ApiError(403, "User is not Admin");
      return res.status(403).send({
        status: 403,
        success: false,
        message: "User is not Admin",
      });
    }
    return true;
  } catch (error) {
    console.log("🚀 ~ file: isAdmin.js isAdmin ~ error:", error);
    throw new ApiError(500, "Network down!");
  }
};
module.exports = isAdmin;

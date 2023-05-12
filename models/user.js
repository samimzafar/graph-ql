const table = "users";
const moment = require("moment");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(table, {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    status: DataTypes.STRING,
    phone: DataTypes.STRING,
    createdAt: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  });
  User.beforeCreate((user) => {
    user.dataValues.createdAt = moment().unix();
    user.dataValues.updatedAt = moment().unix();
  });

  User.beforeUpdate((user) => {
    user.dataValues.updatedAt = moment().unix();
  });
  return User;
};

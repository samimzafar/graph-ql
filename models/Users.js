const table = "users";
const moment = require("moment");
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(table, {
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
  Users.beforeCreate((users) => {
    users.dataValues.createdAt = moment().unix();
    users.dataValues.updatedAt = moment().unix();
  });

  Users.beforeUpdate((users) => {
    users.dataValues.updatedAt = moment().unix();
  });
  return Users;
};

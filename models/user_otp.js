"use strict";
const moment = require("moment");
const table = "user_otps";
module.exports = (sequelize, DataTypes) => {
  const UserOtp = sequelize.define(table, {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    otp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fk_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    expireAt: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  });

  UserOtp.beforeCreate((userOtp) => {
    const currentTime = moment().unix();
    userOtp.dataValues.expireAt = moment
      .unix(currentTime)
      .add(5, "minutes")
      .unix();
    userOtp.dataValues.createdAt = currentTime;
    userOtp.dataValues.updatedAt = currentTime;
  });
  UserOtp.beforeUpdate((userOtp) => {
    userOtp.dataValues.updatedAt = moment().unix();
  });

  return UserOtp;
};

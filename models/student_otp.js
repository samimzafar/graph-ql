"use strict";
const moment = require("moment");
const table = "student_otps";
module.exports = (sequelize, DataTypes) => {
 const StudentOtp = sequelize.define(table, {
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
  fk_student_id: {
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

 StudentOtp.beforeCreate((studentOtp) => {
  const currentTime = moment().unix();
  studentOtp.dataValues.expireAt = moment
   .unix(currentTime)
   .add(5, "minutes")
   .unix();
  studentOtp.dataValues.createdAt = currentTime;
  studentOtp.dataValues.updatedAt = currentTime;
 });
 StudentOtp.beforeUpdate((studentOtp) => {
  studentOtp.dataValues.updatedAt = moment().unix();
 });

 return StudentOtp;
};

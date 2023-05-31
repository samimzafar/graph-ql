("use strict");
const moment = require("moment");
const table = "fees_payment";
module.exports = (sequelize, DataTypes) => {
  const FeesPayment = sequelize.define(table, {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    fk_student_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    exam: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    admission: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    transport: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    tuition: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    total_amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    due_amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    due_date: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    status: {
      allowNull: false,
      type: DataTypes.ENUM("Pending", "Cleared"),
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

  FeesPayment.beforeCreate((feesPayment) => {
    feesPayment.dataValues.createdAt = moment().unix();
    feesPayment.dataValues.updatedAt = moment().unix();
  });

  FeesPayment.beforeUpdate((feesPayment) => {
    feesPayment.dataValues.updatedAt = moment().unix();
  });
  return FeesPayment;
};

("use strict");
const moment = require("moment");
const table = "transactions";
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define(table, {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    fk_fees_payment_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    amount_paid: {
      type: DataTypes.INTEGER,
      allowNull: false,
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

  Transaction.beforeCreate((transaction) => {
    transaction.dataValues.createdAt = moment().unix();
    transaction.dataValues.updatedAt = moment().unix();
  });

  Transaction.beforeUpdate((transaction) => {
    transaction.dataValues.updatedAt = moment().unix();
  });
  return Transaction;
};

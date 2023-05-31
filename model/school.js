("use strict");
const moment = require("moment");
const table = "schools";
module.exports = (sequelize, DataTypes) => {
  const School = sequelize.define(table, {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    archived: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
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

  School.beforeCreate((school) => {
    school.dataValues.createdAt = moment().unix();
    school.dataValues.updatedAt = moment().unix();
  });

  School.beforeUpdate((school) => {
    school.dataValues.updatedAt = moment().unix();
  });
  return School;
};

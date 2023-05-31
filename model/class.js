("use strict");
const moment = require("moment");
const table = "classes";
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define(table, {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    class_name: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
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

  Event.beforeCreate((event) => {
    event.dataValues.createdAt = moment().unix();
    event.dataValues.updatedAt = moment().unix();
  });

  Event.beforeUpdate((event) => {
    event.dataValues.updatedAt = moment().unix();
  });
  return Event;
};

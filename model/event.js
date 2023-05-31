("use strict");
const moment = require("moment");
const table = "events";
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define(table, {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    fk_school_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    date_of_event: {
      allowNull: false,
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

  Event.beforeCreate((event) => {
    event.dataValues.createdAt = moment().unix();
    event.dataValues.updatedAt = moment().unix();
  });

  Event.beforeUpdate((event) => {
    event.dataValues.updatedAt = moment().unix();
  });
  return Event;
};

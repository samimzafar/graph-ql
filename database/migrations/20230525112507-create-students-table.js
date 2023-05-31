"use strict";
const table = "students";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(table, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fk_school_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      fk_class_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      admission_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      roll_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      father_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dob: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      gender: {
        type: Sequelize.ENUM("Boy", "Girl"),
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      archived: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable(table);
  },
};

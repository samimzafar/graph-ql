"use strict";

const table = "user_otps";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(table, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      otp: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      fk_user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      expireAt: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable(table);
  },
};

"use strict";

const table = "fees_payment";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(table, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fk_student_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      exam: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      admission: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      transport: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      tuition: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      total_amount: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      due_amount: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      due_date: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM("Pending", "Cleared"),
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

"use strict";
const tableStudents = "students";
//columns
const columnSection = "section";
const columnTransportType = "transport_type";
const columnAdditionalDetails = "additional_details";
const phoneNumber = "phone_number";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(tableStudents, columnAdditionalDetails, {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
      after: phoneNumber,
    });
    await queryInterface.addColumn(tableStudents, columnTransportType, {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
      after: phoneNumber,
    });
    await queryInterface.addColumn(tableStudents, columnSection, {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
      after: phoneNumber,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn(tableStudents, columnSection);
    await queryInterface.removeColumn(tableStudents, columnTransportType);
    await queryInterface.removeColumn(tableStudents, columnAdditionalDetails);
  },
};

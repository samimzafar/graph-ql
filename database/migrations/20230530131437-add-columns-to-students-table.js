"use strict";
const tableStudents = "students";
//columns
const columnSection = "section";
const columnTransportNumber = "transport_number";
const columnAdditionalDetails = "additional_details";
const columnAlumni = "alumni";
const columnAlumniReason = "alumni_reason";
const phoneNumber = "phone_number";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(tableStudents, columnAlumniReason, {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
      after: phoneNumber,
    });
    await queryInterface.addColumn(tableStudents, columnAlumni, {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      after: phoneNumber,
    });
    await queryInterface.addColumn(tableStudents, columnAdditionalDetails, {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
      after: phoneNumber,
    });
    await queryInterface.addColumn(tableStudents, columnTransportNumber, {
      type: Sequelize.INTEGER,
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
    await queryInterface.removeColumn(tableStudents, columnTransportNumber);
    await queryInterface.removeColumn(tableStudents, columnAdditionalDetails);
    await queryInterface.removeColumn(tableStudents, columnAlumni);
    await queryInterface.removeColumn(tableStudents, columnAlumniReason);
  },
};

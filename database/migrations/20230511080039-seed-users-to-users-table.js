"use strict";
const moment = require("moment");
const Users = require("../seeders/Users");
const tableUser = "users";
const columnName = "name";
const columnEmail = "email";
const columnGender = "gender";
const columnStatus = "status";

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert(tableUser, Users);
  },
  down: async (queryInterface) => {
    return queryInterface.bulkDelete(tableUser, null, {});
  },
};

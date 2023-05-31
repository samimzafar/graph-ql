const md5 = require("md5");
const moment = require("moment");
const tableUser = "users";
const currentTime = moment().unix();
module.exports = {
  up: async (queryInterface) => {
    const usersData = [
      {
        fk_school_id: 1,
        role: "Admin", // Set the role as needed
        email: "admin@test.com",
        password: md5("iamAdmin"), // MD5 hashed password
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        fk_school_id: 1,
        role: "Manager", // Set the role as needed
        email: "manager@test.com",
        password: md5("iamManager"), // MD5 hashed password
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      // Add more user objects as needed
    ];

    await queryInterface.bulkInsert(tableUser, usersData, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete(tableUser, null, {});
  },
};

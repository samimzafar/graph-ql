const moment = require("moment");
const currentTime = moment().unix();
const tableSchools = "schools";
module.exports = {
  up: async (queryInterface) => {
    const schoolsData = [
      {
        name: "Frontier Model School",
        phone_number: "12345678",
        address: "Warsak Road ",
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        name: "Aps School",
        phone_number: "33232323",
        address: "Saddar Cantt ",
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        name: "Fg public School",
        phone_number: "87876363",
        address: "HayatAbad  ",
        createdAt: currentTime,
        updatedAt: currentTime,
      },
    ];

    await queryInterface.bulkInsert(tableSchools, schoolsData, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete(tableSchools, null, {});
  },
};

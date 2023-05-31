const moment = require("moment");
const currentTime = moment().unix();
const tableClasses = "classes";
module.exports = {
  up: async (queryInterface) => {
    const classesData = [
      {
        class_name: 8,
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        class_name: 5,
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        class_name: 7,
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        class_name: 10,
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        class_name: 9,
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      // Add more user objects as needed
    ];

    await queryInterface.bulkInsert(tableClasses, classesData, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete(tableClasses, null, {});
  },
};

const moment = require("moment");
const currentTime = moment().unix();
const tableStudents = "students";
module.exports = {
  up: async (queryInterface) => {
    const studentData = [
      {
        fk_school_id: 1,
        fk_class_id: 1,
        admission_id: 20,
        roll_id: 2,
        first_name: "samim",
        last_name: "zafar",
        father_name: "Zafar Ali",
        phone_number: "12345678",
        dob: 855968232,
        gender: "Boy",
        address: "Peshawar Road",
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        fk_school_id: 2,
        fk_class_id: 2,
        admission_id: 25,
        roll_id: 3,
        first_name: "Ali",
        last_name: "khan",
        father_name: "khan test",
        phone_number: "435435423",
        dob: 855968232,
        gender: "Boy",
        address: "Kohat road",
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        fk_school_id: 2,
        fk_class_id: 1,
        admission_id: 15,
        roll_id: 6,
        first_name: "test",
        last_name: "new",
        father_name: "new test",
        phone_number: "87877785",
        dob: 855968232,
        gender: "Boy",
        address: "HayatAbad  phase 6",
        createdAt: currentTime,
        updatedAt: currentTime,
      },
    ];

    await queryInterface.bulkInsert(tableStudents, studentData, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete(tableStudents, null, {});
  },
};

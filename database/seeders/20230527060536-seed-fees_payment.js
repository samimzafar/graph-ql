const moment = require("moment");
const currentTime = moment().unix();
const tableFeesPayment = "fees_payment";
module.exports = {
  up: async (queryInterface) => {
    let feesPaymentData = [
      {
        fk_student_id: 1,
        exam: 2000,
        admission: 3000,
        transport: 5000,
        tuition: 2000,
        due_date: 1685167032,
        status: "Pending",
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        fk_student_id: 2,
        exam: 4000,
        admission: 6000,
        transport: 2000,
        tuition: 5000,
        due_date: 1685167032,
        status: "Pending",
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        fk_student_id: 3,
        exam: 1000,
        admission: 2000,
        transport: 3000,
        tuition: 6000,
        due_date: 1685167032,
        status: "Pending",
        createdAt: currentTime,
        updatedAt: currentTime,
      },
    ];

    feesPaymentData.forEach((data) => {
      const { exam, admission, transport, tuition } = data;
      const totalAmount = exam + admission + transport + tuition;
      data.total_amount = totalAmount;
      data.due_amount = totalAmount;
    });

    await queryInterface.bulkInsert(tableFeesPayment, feesPaymentData, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete(tableFeesPayment, null, {});
  },
};

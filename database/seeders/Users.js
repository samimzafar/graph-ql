const moment = require("moment");
const createdAt = moment().unix();
const updatedAt = moment().unix();
module.exports = [
  {
    name: "Samim",
    email: "samim@test.pk",
    gender: "male",
    status: "active",
    phone: "03068099788",
    createdAt,
    updatedAt,
  },
  {
    name: "Bilal",
    email: "Bilal@test.pk",
    gender: "male",
    status: "offline",
    phone: "03168293538",
    createdAt,
    updatedAt,
  },
  {
    name: "Tariq",
    email: "Tariq@test.pk",
    gender: "male",
    status: "active",
    phone: "034521223",
    createdAt,
    updatedAt,
  },
];

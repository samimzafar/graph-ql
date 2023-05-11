const moment = require("moment");
const createdAt = moment().unix();
const updatedAt = moment().unix();
module.exports = [
 {
  name: "Samim",
  email: "samim@test.pk",
  gender: "male",
  status: "active",
  createdAt,
  updatedAt

 },
 {
  name: "Bilal",
  email: "Bilal@test.pk",
  gender: "male",
  status: "offline",
  createdAt,
  updatedAt
 },
 {
  name: "Tariq",
  email: "Tariq@test.pk",
  gender: "male",
  status: "active",
  createdAt,
  updatedAt
 }
];
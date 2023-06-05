const { col } = require("sequelize");
const { Students, Schools, Classes } = require("../model");
const ApiError = require("../utils/ApiError");
module.exports = (resolverFunction) => {
 return async (parent, args, context, info) => {
  const { userId } = args;
  const student = await Students.findByPk(userId,
   {
    attributes: [
     "id",
     "admission_id",
     "roll_id",
     "first_name",
     "last_name",
     "father_name",
     "phone_number",
     "section",
     "transport_number",
     "alumni",
     "alumni_reason",
     [col("schools.name"), "schoolName"],
     [col("classes.class_name"), "className"],
    ],
    include: [
     {
      model: Schools,
      as: "schools",
      attributes: [],
     },
     {
      model: Classes,
      as: "classes",
      attributes: [],
     },
    ],
    raw: true,
   }
  );
  if (!student) {
   throw new ApiError(401, "Student not exists");
  }
  args.student = student;
  return resolverFunction(parent, args, context, info);
 };
};
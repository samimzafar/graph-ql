const { col } = require('sequelize');
const { Students, Schools, Classes } = require('../model');
const ApiError = require('../utils/ApiError');

module.exports = (resolverFunction) => {
 return async (parent, args, context, info) => {
  const { userId } = args;

  const student = await Students.findByPk(userId, {
   attributes: Object.keys(Students.rawAttributes).map((attribute) => {
    if (attribute === 'schoolName') {
     // Handle the schoolName attribute separately since it requires a column alias
     return [col('schools.name'), 'schoolName'];
    }
    if (attribute === 'className') {
     // Handle the className attribute separately since it requires a column alias
     return [col('classes.class_name'), 'className'];
    }
    // Return the attribute as it is
    return attribute;
   }),
   include: [
    {
     model: Schools,
     as: 'schools',
     attributes: [],
    },
    {
     model: Classes,
     as: 'classes',
     attributes: [],
    },
   ],
   raw: true,
  });

  if (!student) {
   throw new ApiError(401, 'Student does not exist');
  }

  args.student = student;
  return resolverFunction(parent, args, context, info);
 };
};

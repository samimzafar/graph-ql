("use strict");
const moment = require("moment");
const table = "students";
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define(
    table,
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      fk_school_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      fk_class_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      admission_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      roll_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      father_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      section: {
        type: DataTypes.STRING,
      },
      transport_type: {
        type: DataTypes.STRING,
      },
      additional_details: {
        type: DataTypes.STRING,
      },
      dob: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      gender: {
        type: DataTypes.ENUM("Boy", "Girl"),
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      archived: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      defaultScope: {
        where: {
          archived: false,
        },
      },
    }
  );

  Student.associate = (models) => {
    Student.belongsTo(models.Schools, {
      as: "schools",
      foreignKey: "fk_school_id",
    });
    Student.belongsTo(models.Classes, {
      as: "classes",
      foreignKey: "fk_class_id",
    });
  };
  Student.beforeCreate((student) => {
    student.dataValues.createdAt = moment().unix();
    student.dataValues.updatedAt = moment().unix();
  });

  Student.beforeUpdate((student) => {
    student.dataValues.updatedAt = moment().unix();
  });

  Student.createStudent = async (data) => {
    return await Student.create({
      fk_school_id: data.school_id,
      fk_class_id: data.class_id,
      admission_id: data.admission_id,
      roll_id: data.roll_id,
      first_name: data.first_name,
      last_name: data.last_name,
      father_name: data.father_name,
      phone_number: data.phone_number,
      dob: data.dob,
      gender: data.gender,
      address: data.address,
      section: data.section,
      transport_type: data.transport_type,
      additional_details: data.additional_details,
    });
  };
  return Student;
};

("use strict");
const moment = require("moment");
const { col, literal } = require("sequelize");
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
      transport_number: {
        type: DataTypes.INTEGER,
      },
      additional_details: {
        type: DataTypes.STRING,
      },
      alumni: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      alumni_reason: {
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
    const transaction = await sequelize.transaction();
    return await Student.create(
      {
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
        transport_number: data.transport_number,
        additional_details: data.additional_details,
      },
      transaction
    );
  };

  Student.getAllStudents = async (whereClause) => {
    const transaction = await sequelize.transaction();
    const { schools, classes, fee_payments, transactions } = sequelize.models;
    return await Student.findAll({
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
        [col("schools.name"), "schoolName"],
        [col("classes.class_name"), "className"],
        [col("feePayments.total_amount"), "fees"],
        [col("feePayments.transport"), "transportFees"],
        [
          literal(
            "(SELECT createdAt FROM transactions WHERE fk_fees_payment_id = feePayments.id ORDER BY id DESC LIMIT 1)"
          ),
          "paidDate",
        ],
      ],
      include: [
        {
          model: schools,
          as: "schools",
          attributes: [],
        },
        {
          model: classes,
          as: "classes",
          attributes: [],
        },
        {
          model: fee_payments,
          as: "feePayments",
          attributes: [],
          include: [
            {
              model: transactions,
              as: "transactions",
              attributes: [],
            },
          ],
        },
      ],
      where: whereClause,
      transaction,
    });
  };
  return Student;
};

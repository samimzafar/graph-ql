const table = "users";
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(table, {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    status: DataTypes.STRING,
    createdAt: DataTypes.INTEGER,
    updatedAt: DataTypes.INTEGER,
  });
  return Users;
};

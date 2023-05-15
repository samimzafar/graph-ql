const tableUsers = "users";
const columnRole = "role";
const columnPhone = "phone";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(tableUsers, columnRole, {
      type: Sequelize.ENUM("Admin", "User", "Student", "Faculty"),
      defaultValue: "User",
      allowNull: false,
      after: columnPhone,
    });
  },
  async down(queryInterface) {
    await queryInterface.removeColumn(tableUsers, columnRole);
  },
};

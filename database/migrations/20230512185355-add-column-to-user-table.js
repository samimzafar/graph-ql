const tableUsers = "users";
const columnRole = "role";
const columArchieved = "archieved";
const columnPhone = "phone";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(tableUsers, columnRole, {
      type: Sequelize.ENUM("Admin", "User", "Student", "Faculty"),
      defaultValue: "User",
      allowNull: false,
      after: columnPhone,
    });
    await queryInterface.addColumn(tableUsers, columArchieved, {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      after: columnPhone,
    });
  },
  async down(queryInterface) {
    await queryInterface.removeColumn(tableUsers, columnRole);
    await queryInterface.removeColumn(tableUsers, columArchieved);
  },
};

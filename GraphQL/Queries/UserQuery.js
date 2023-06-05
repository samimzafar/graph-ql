module.exports = {
  getAllStudents: async (parent) => {
    const {
      Models: { Students },
    } = parent;
    let students = await Students.findAll();
    console.log("🚀 ~ file: UserQuery.js:7 ~ getAllStudents: ~ students:", students);
    if (!students || students.length === 0) {
      return {
        status: 404,
        success: false,
        message: "No students found",
        data: [],
      };
    }
    return {
      status: 200,
      success: true,
      message: "User retrieved successfully",
      data: students,
    };
  },

  getStudentProfile: async (parent, args) => {
    const { student } = args;
    return student;
  },
};

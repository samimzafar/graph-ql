module.exports = {
  getAllStudents: async (parent) => {
    const {
      Models: { Students },
    } = parent;
    let students = await Students.findAll({});
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
    const { userId } = args;
    const {
      Models: { Students },
    } = parent;
    let students = await Students.findOne({
      where: {
        id: userId
      }
    });
    return students;
  },
};

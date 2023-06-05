module.exports = {
  getAllStudents: async (parent) => {
    const {
      Models: { Users },
    } = parent;
    let users = await Users.findAll();
    if (!users || users.length === 0) {
      return {
        status: 404,
        success: false,
        message: "No users found",
        data: [],
      };
    }
    users.map(({ email, token_time_stamp, role }) => ({
      email,
      token_time_stamp,
      role,
    }));
    return {
      status: 200,
      success: true,
      message: "User retrieved successfully",
      data: users,
    };
  },

  getStudentProfile: async (parent, args) => {
    const { student } = args;
    return student;
    // return {
    //   status: 200,
    //   success: true,
    //   message: "User retrieved successfully",
    //   data: student,
    // };
  },
};

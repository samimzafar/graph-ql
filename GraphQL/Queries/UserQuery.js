module.exports = {
  getAllUsers: async (parent) => {
    const {
      Models: { Users },
    } = parent;
    let users = await Users.findAll({ raw: true });
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

  getOneUser: async (parent, args) => {
    const { userId } = args;
    const {
      Models: { Users },
    } = parent;
    let user = await Users.findAll({ where: { id: userId }, raw: true });
    return {
      status: 200,
      success: true,
      message: "User retrieved successfully",
      data: user,
    };
  },
};

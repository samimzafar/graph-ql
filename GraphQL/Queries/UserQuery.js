module.exports = {
  getAllUsers: async (parent) => {
    const {
      Models: { Users },
    } = parent;
    let data = await Users.findAll();
    return data;
  },

  getOneUser: async (parent, args) => {
    const { id } = args;
    const {
      Models: { Users },
    } = parent;
    return Users.findAll({ where: { id } });
  },
};

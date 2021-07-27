export const usersApi = {
  getUsers: (parent: any, args: any, { User }: any) => {
    return User.find({});
  },
  getUser: (parent: any, args: any, { User }: any) => {
    return User.findById(args._id);
  },
  addUser: async (parent: any, args: any, { User }: any) => {
    try {
      const newUser = new User(args.user);
      const user = await newUser.save();
      return user;
    } catch (error) {
      throw new Error(error);
    }
  },
  removeUser: async (parent: any, args: any, { User }: any) => {
    try {
      const user = await User.findById(args._id);
      if (user) {
        await user.delete();
        return "User deleted!";
      } else {
        return "User does not exist";
      }
    } catch (error) {
      throw new Error(error);
    }
  },
};

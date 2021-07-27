export const usersApi = {
  getUsers: (parent: any, args: any, context: any) => {
    return context.db.User.find({});
  },
  getUser: (parent: any, args: any, context: any) => {
    return context.db.User.findById(args._id);
  },
};

export const resolvers = {
  Query: {
    users: (parent: any, args: any, context: any) => {
      console.log(context.db);
      return context.db.User.find({});
    },
    user: (parent: any, args: any, context: any) => {
      return context.db.User.findById(args._id);
    },
  },
};

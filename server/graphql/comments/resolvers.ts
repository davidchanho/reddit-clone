export const resolvers = {
  Query: {
    comments: (parent: any, args: any, context: any) => {
      return context.db.Comment.find({});
    },
    comment: (parent: any, args: any, context: any) => {
      return context.db.Comment.findById(args._id);
    },
  },
};

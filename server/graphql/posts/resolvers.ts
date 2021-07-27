export const resolvers = {
  Query: {
    posts: (parent: any, args: any, context: any) => {
      return context.db.Post.find({});
    },
    post: (parent: any, args: any, context: any) => {
      return context.db.Post.findById(args._id);
    },
  },
};

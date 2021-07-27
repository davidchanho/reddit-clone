export const resolvers = {
  Query: {
    subreddits: (parent: any, args: any, context: any) => {
      return context.db.Subreddit.find({});
    },
    subreddit: (parent: any, args: any, context: any) => {
      return context.db.Subreddit.findById(args._id);
    },
  },
};

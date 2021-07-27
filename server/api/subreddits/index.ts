export const subredditsApi = {
  getSubreddits: (parent: any, args: any, context: any) => {
    return context.db.Subreddit.find({});
  },
  getSubreddit: (parent: any, args: any, context: any) => {
    return context.db.Subreddit.findById(args._id);
  },
  getPosts: (parent: any, args: any, context: any) => {
    return context.db.Post.find({ subreddit: parent.name });
  },
};
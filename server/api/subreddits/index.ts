export const subredditsApi = {
  getSubreddits: (parent: any, args: any, { Subreddit }: any) => {
    return Subreddit.find({});
  },
  getSubreddit: (parent: any, args: any, { Subreddit }: any) => {
    return Subreddit.findById(args._id);
  },
  addSubreddit: async (parent: any, args: any, { Subreddit }: any) => {
    const subreddit = new Subreddit(args.subreddit);
    return await subreddit.save();
  },
  removeSubreddit: async (parent: any, args: any, { Subreddit }: any) => {
    const subreddit = await Subreddit.findById(args._id);
    if (subreddit) {
      return await subreddit.delete();
    }
  },
  updateSubreddit: async (parent: any, args: any, { Subreddit }: any) => {
    return await Subreddit.findOneAndUpdate({ _id: args._id }, args.subreddit);
  },
  getPosts: (parent: any, args: any, { Post }: any) => {
    return Post.find({ subreddit: parent._id });
  },
};

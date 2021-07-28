export const subredditsApi = {
  getSubreddits: (parent: any, args: any, { Subreddit }: any) => {
    return Subreddit.find({});
  },
  getSubreddit: (parent: any, args: any, { Subreddit }: any) => {
    return Subreddit.findById(args._id);
  },
  addSubreddit: async (parent: any, args: any, { Subreddit }: any) => {
    try {
      const newSubreddit = new Subreddit(args.subreddit);
      const subreddit = await newSubreddit.save();
      return subreddit;
    } catch (error) {
      throw new Error(error);
    }
  },
  removeSubreddit: async (parent: any, args: any, { Subreddit }: any) => {
    try {
      const subreddit = await Subreddit.findById(args._id);
      if (subreddit) {
        await subreddit.delete();
        return "Subreddit deleted!";
      } else {
        return "Subreddit does not exist";
      }
    } catch (error) {
      throw new Error(error);
    }
  },
  updateSubreddit: async (parent: any, args: any, { Subreddit }: any) => {
    return await Subreddit.findOneAndUpdate({ _id: args._id }, args.subreddit);
  },
  getPosts: (parent: any, args: any, { Post }: any) => {
    return Post.find({ subreddit: parent._id });
  },
};

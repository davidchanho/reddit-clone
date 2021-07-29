export const usersApi = {
  getUsers: (parent: any, args: any, { User }: any) => {
    return User.find({});
  },
  getUser: (parent: any, args: any, { User }: any) => {
    return User.findById(args._id);
  },
  addUser: async (parent: any, args: any, { User }: any) => {
    const user = new User(args.user);
    return await user.save();
  },
  removeUser: async (parent: any, args: any, { User }: any) => {
    const user = await User.findById(args._id);
    if (user) {
      return await user.delete();
    }
  },
  updateUser: async (parent: any, args: any, { User }: any) => {
    return await User.findOneAndUpdate({ _id: args._id }, args.user);
  },
  getComments: (parent: any, args: any, { Comment }: any) => {
    return Comment.find({ user: parent._id });
  },
  getPosts: (parent: any, args: any, { Post }: any) => {
    return Post.find({ user: parent._id });
  },
  getFollowers: (parent: any, args: any, { User }: any) => {
    return User.find({ followers: { $in: parent.followers } });
  },
  getBookmarks: (parent: any, args: any, { Post }: any) => {
    return Post.find({ _id: { $in: parent.bookmarks } });
  },
  getSubreddits: (parent: any, args: any, { Subreddit }: any) => {
    return Subreddit.find({ _id: { $in: parent.subreddits } });
  },
  addFollower: async (parent: any, args: any, { User }: any) => {
    const follower = await User.findOne({ _id: args.followerId });

    if (follower) {
      const user = await User.findOne({ _id: args.userId });
      if (user) {
        user.followers.push(follower);
        return user.save();
      }
    }
  },
  addBookmark: async (parent: any, args: any, { Post, User }: any) => {
    const post = await Post.findOne({ _id: args.postId });
    if (post) {
      const user = await User.findOne({ _id: args.userId });
      if (user) {
        user.bookmarks.push(post);
        return user.save();
      }
    }
  },
  addSubreddit: async (parent: any, args: any, { Subreddit, User }: any) => {
    const subreddit = await Subreddit.findOne({ _id: args.subredditId });
    if (subreddit) {
      const user = await User.findOne({ _id: args.userId });
      if (user) {
        user.subreddits.push(subreddit);
        return user.save();
      }
    }
  },
  removeFollower: async (parent: any, args: any, { User }: any) => {
    const user = await User.findOne({ _id: args.userId });
    if (user) {
      user.followers.pull({ _id: args.followerId });
      return user.save();
    }
  },
  removeBookmark: async (parent: any, args: any, { User }: any) => {
    const user = await User.findOne({ _id: args.userId });
    if (user) {
      user.bookmarks.pull({ _id: args.postId });
      return user.save();
    }
  },
  removeSubredditFromUser: async (
    parent: any,
    args: any,
    { Subreddit, User }: any
  ) => {
    const user = await User.findOne({ _id: args.userId });
    if (user) {
      user.subreddits.pull({ _id: args.subredditId });
      return user.save();
    }
  },
};

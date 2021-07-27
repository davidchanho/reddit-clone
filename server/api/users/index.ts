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
    return Post.find({ user: { $in: parent.bookmarks } });
  },
  getSubreddits: (parent: any, args: any, { Subreddit }: any) => {
    return Subreddit.find({ _id: { $in: parent.subreddits } });
  },
  addFollower: async (parent: any, args: any, { User }: any) => {
    const follower = await User.findOne({ _id: args.followerId });
    try {
      if (follower) {
        const user = await User.findOne({ _id: args.userId });
        if (user) {
          user.followers.push(follower);
          user.save();
        }
        return "User does not exist";
      } else {
        return "Follower does not exist";
      }
    } catch (error) {
      throw new Error(error);
    }
  },
  addBookmark: async (parent: any, args: any, { Post, User }: any) => {
    const post = await Post.findOne({ _id: args.postId });
    try {
      if (post) {
        const user = await User.findOne({ _id: args.userId });
        if (user) {
          user.bookmarks.push(post);
          user.save();
        }
        return "User does not exist";
      } else {
        return "Post does not exist";
      }
    } catch (error) {
      throw new Error(error);
    }
  },
  addSubreddit: async (parent: any, args: any, { Subreddit, User }: any) => {
    const subreddit = await Subreddit.findOne({ _id: args.subredditId });
    try {
      if (subreddit) {
        const user = await User.findOne({ _id: args.userId });
        if (user) {
          user.subreddits.push(subreddit);
          user.save();
        }
        return "User does not exist";
      } else {
        return "Subreddit does not exist";
      }
    } catch (error) {
      throw new Error(error);
    }
  },
};

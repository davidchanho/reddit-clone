import API from "../../api";

const model = "User";

const Query = {
  users: API.fetchMany(model),
  user: API.fetchOne(model),
};

const User = {
  followers: (parent: any, args: any, { User }: any) => {
    return User.find({ followers: { $in: parent.followers } });
  },
  bookmarks: (parent: any, args: any, { Post }: any) => {
    return Post.find({ _id: { $in: parent.bookmarks } });
  },
  posts: (parent: any, args: any, { Post }: any) => {
    return Post.find({ user: parent._id });
  },
  comments: (parent: any, args: any, { Comment }: any) => {
    return Comment.find({ user: parent._id });
  },
  subreddits: (parent: any, args: any, { Subreddit }: any) => {
    return Subreddit.find({ _id: { $in: parent.subreddits } });
  },
};

const Mutation = {
  addUser: API.addOne(model),
  removeUser: API.removeOne(model),
  updateUser: API.updateOne(model),

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
  addSubredditToUser: async (
    parent: any,
    args: any,
    { Subreddit, User }: any
  ) => {
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

export const resolvers = {
  Query,
  User,
  Mutation,
};

import API from "../../api";

const model = "Post";

const Query = {
  posts: API.fetchMany(model),
  post: API.fetchOne(model),
};

const Post = {
  user: (parent: any, args: any, { User }: any) => {
    return User.findOne({ _id: parent.user });
  },
  comments: (parent: any, args: any, { Comment }: any) => {
    return Comment.find({ post: parent._id });
  },
  subreddit: (parent: any, args: any, { Subreddit }: any) => {
    return Subreddit.findOne({ _id: parent.subreddit });
  },
};

const Mutation = {
  addPost: API.addOne(model),
  removePost: API.removeOne(model),
  updatePost: API.updateOne(model),
  likePost: async (parent: any, args: any, context: any) => {
    const post = await context[model].findById(args._id);
    if (post) {
      post.likes = post.likes + 1;
      await post.save();
    }
  },
  dislikePost: async (parent: any, args: any, context: any) => {
    const post = await context[model].findById(args._id);
    if (post) {
      if (post.likes > 1) {
        post.likes = post.likes - 1;
        await post.save();
      }
    }
  },
};

export const resolvers = {
  Query,
  Post,
  Mutation,
};

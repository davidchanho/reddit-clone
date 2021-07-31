import API from "../../api";

const model = "Post";

const Query = {
  posts: API.fetchMany(model),
  post: (parent: any, args: any, context: any) => {
    return context[model].findOne({ title: args.title });
  },
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
};

export const resolvers = {
  Query,
  Post,
  Mutation,
};

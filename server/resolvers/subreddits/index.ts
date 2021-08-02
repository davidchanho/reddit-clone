import API from "../../api";

const model = "Subreddit";

const Query = {
  subreddits: API.fetchMany(model),
  subreddit: (parent: any, args: any, { Subreddit }: any) => {
    return Subreddit.findOne({ name: args.name });
  },
};

const Subreddit = {
  posts: (parent: any, args: any, { Post }: any) => {
    return Post.find({ subreddit: args.name });
  },
  post: (parent: any, args: any, { Post }: any) => {
    return Post.findById(args._id);
  },
};

const Mutation = {
  addSubreddit: API.addOne(model),
  removeSubreddit: API.removeOne(model),
  updateSubreddit: API.updateOne(model),
};

export const resolvers = {
  Query,
  Subreddit,
  Mutation,
};

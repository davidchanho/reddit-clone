import API from "../../api";

const model = "Subreddit";

const Query = {
  subreddits: API.fetchMany(model),
  subreddit: API.fetchOne(model),
};

const Subreddit = {
  posts: (parent: any, args: any, { Post }: any) => {
    return Post.find({ subreddit: parent._id });
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

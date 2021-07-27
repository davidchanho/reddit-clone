import { subredditsApi } from "../../api";

const Query = {
  subreddits: subredditsApi.getSubreddits,
  subreddit: subredditsApi.getSubreddit,
};

const Subreddit = {
  posts: subredditsApi.getPosts,
};

const Mutation = {
  addSubreddit: subredditsApi.addSubreddit,
  removeSubreddit: subredditsApi.removeSubreddit,
};

export const resolvers = {
  Query,
  Subreddit,
  Mutation,
};

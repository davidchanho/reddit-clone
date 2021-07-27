import { subredditsApi } from "../../api";

const Query = {
  subreddits: subredditsApi.getSubreddits,
  subreddit: subredditsApi.getSubreddit,
};

const Subreddit = {
  posts: subredditsApi.getPosts,
};

export const resolvers = {
  Query,
  Subreddit,
};

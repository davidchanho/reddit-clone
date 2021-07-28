import { postsApi } from "../../api";

const Query = {
  posts: postsApi.getPosts,
  post: postsApi.getPost,
};

const Post = {
  user: postsApi.getUser,
  comments: postsApi.getComments,
  subreddit: postsApi.getSubreddit,
};

const Mutation = {
  addPost: postsApi.addPost,
  removePost: postsApi.removePost,
  updatePost: postsApi.updatePost,
};

export const resolvers = {
  Query,
  Post,
  Mutation,
};

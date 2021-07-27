import { postsApi } from "../../api";

const Query = {
  posts: postsApi.getPosts,
  post: postsApi.getPost,
};

const Post = {
  user: postsApi.getUser,
};

export const resolvers = {
  Query,
  Post,
};

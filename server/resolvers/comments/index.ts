import { commentsApi } from "../../api";

const Query = {
  comments: commentsApi.getComments,
  comment: commentsApi.getComment,
};

const Comment = {
  user: commentsApi.getUser,
  post: commentsApi.getPost,
};

const Mutation = {
  addComment: commentsApi.addComment,
  removeComment: commentsApi.removeComment,
  updateComment: commentsApi.updateComment,
};

export const resolvers = {
  Query,
  Comment,
  Mutation,
};

import { commentsApi } from "../../api";

const Query = {
  comments: commentsApi.getComments,
  comment: commentsApi.getComment,
};

const Comment = {
  user: commentsApi.getUser,
  post: commentsApi.getPost,
};

export const resolvers = {
  Query,
  Comment,
};

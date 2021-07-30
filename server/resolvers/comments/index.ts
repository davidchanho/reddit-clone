import API from "../../api";

const model = "Comment";

const Query = {
  comments: API.fetchMany(model),
  comment: API.fetchOne(model),
};

const Comment = {
  user: (parent: any, args: any, { User }: any) => {
    return User.findById(parent.user);
  },
  post: (parent: any, args: any, { Post }: any) => {
    return Post.findById(parent.post);
  },
};

const Mutation = {
  addComment: API.addOne(model),
  removeComment: API.removeOne(model),
  updateComment: API.updateOne(model),
};

export const resolvers = {
  Query,
  Comment,
  Mutation,
};

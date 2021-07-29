export const commentsApi = {
  getComments: (parent: any, args: any, { Comment }: any) => {
    return Comment.find({});
  },
  getComment: (parent: any, args: any, { Comment }: any) => {
    return Comment.findById(args._id);
  },
  addComment: async (parent: any, args: any, { Comment }: any) => {
    const comment = new Comment(args.comment);
    return await comment.save();
  },
  removeComment: async (parent: any, args: any, { Comment }: any) => {
    const comment = await Comment.findById(args._id);
    if (comment) {
      return await comment.delete();
    }
  },
  updateComment: async (parent: any, args: any, { Comment }: any) => {
    return await Comment.findOneAndUpdate({ _id: args._id }, args.comment);
  },
  getUser: (parent: any, args: any, { User }: any) => {
    return User.findById(parent.user);
  },
  getPost: (parent: any, args: any, { Post }: any) => {
    return Post.findById(parent.post);
  },
};

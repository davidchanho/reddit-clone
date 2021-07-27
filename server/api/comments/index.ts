export const commentsApi = {
  getComments: (parent: any, args: any, context: any) => {
    return context.db.Comment.find({});
  },
  getComment: (parent: any, args: any, context: any) => {
    return context.db.Comment.findById(args._id);
  },
  getUser: (parent: any, args: any, context: any) => {
    return context.db.User.findById(parent.userId);
  },
  getPost: (parent: any, args: any, context: any) => {
    return context.db.Post.findById(parent.postId);
  },
};

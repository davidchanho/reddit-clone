export const commentsApi = {
  getComments: (parent: any, args: any, { Comment }: any) => {
    return Comment.find({});
  },
  getComment: (parent: any, args: any, { Comment }: any) => {
    return Comment.findById(args._id);
  },
  addComment: async (parent: any, args: any, { Comment }: any) => {
    try {
      const newComment = new Comment(args.comment);
      const comment = await newComment.save();
      return comment;
    } catch (error) {
      throw new Error(error);
    }
  },
  removeComment: async (parent: any, args: any, { Comment }: any) => {
    try {
      const comment = await Comment.findById(args._id);
      if (comment) {
        await comment.delete();
        return "Comment deleted!";
      } else {
        return "Comment does not exist";
      }
    } catch (error) {
      throw new Error(error);
    }
  },
  getUser: (parent: any, args: any, { User }: any) => {
    return User.findById(parent.userId);
  },
  getPost: (parent: any, args: any, { Post }: any) => {
    return Post.findById(parent.postId);
  },
};

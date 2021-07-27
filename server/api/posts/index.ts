export const postsApi = {
  getPosts: (parent: any, args: any, context: any) => {
    return context.db.Post.find({});
  },
  getPost: (parent: any, args: any, context: any) => {
    return context.db.Post.findById(args._id);
  },
  getUser: (parent: any, args: any, context: any) => {
    return context.db.User.findOne({ name: parent.userName });
  }
};
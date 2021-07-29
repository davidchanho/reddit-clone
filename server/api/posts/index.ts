export const postsApi = {
  getPosts: (parent: any, args: any, { Post }: any) => {
    return Post.find({});
  },
  getPost: (parent: any, args: any, { Post }: any) => {
    return Post.findById(args._id);
  },
  addPost: async (parent: any, args: any, { Post }: any) => {
    const post = new Post(args.post);
    return await post.save();
  },
  removePost: async (parent: any, args: any, { Post }: any) => {
    const post = await Post.findById(args._id);
    if (post) {
      return await post.remove();
    }
  },
  updatePost: async (parent: any, args: any, { Post }: any) => {
    return await Post.findOneAndUpdate({ _id: args._id }, args.post);
  },
  getUser: (parent: any, args: any, { User }: any) => {
    return User.findOne({ _id: parent.user });
  },
  getComments: (parent: any, args: any, { Comment }: any) => {
    return Comment.find({ post: parent._id });
  },
  getSubreddit: (parent: any, args: any, { Subreddit }: any) => {
    return Subreddit.findOne({ _id: parent.subreddit });
  },
};

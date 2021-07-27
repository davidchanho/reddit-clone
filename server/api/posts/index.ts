export const postsApi = {
  getPosts: (parent: any, args: any, { Post }: any) => {
    return Post.find({});
  },
  getPost: (parent: any, args: any, { Post }: any) => {
    return Post.findById(args._id);
  },
  addPost: async (parent: any, args: any, { Post }: any) => {
    try {
      const newPost = new Post(args.post);
      const post = await newPost.save();
      return post;
    } catch (error) {
      throw new Error(error);
    }
  },
  removePost: async (parent: any, args: any, { Post }: any) => {
    try {
      const post = await Post.findById(args._id);
      if (post) {
        await post.delete();
        return "Post deleted!";
      } else {
        return "Post does not exist";
      }
    } catch (error) {
      throw new Error(error);
    }
  },
  getUser: (parent: any, args: any, { User }: any) => {
    return User.findOne({ name: parent.userName });
  },
};

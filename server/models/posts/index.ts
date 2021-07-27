import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  userName: { type: String, required: true },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  comments: { type: Number, default: 0 },
  subreddit: { type: String, required: true },
  date: { type: String, default: new Date().toString() },
});

const Post = mongoose.model("post", postSchema);

export default Post;

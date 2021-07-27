import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  _id: String,
  title: String,
  body: String,
  userName: String,
  views: Number,
  likes: Number,
  comments: Number,
  subreddit: String,
  date: String,
});

const Post = mongoose.model("post", postSchema);

export default Post
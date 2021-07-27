import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
  _id: String,
  name: String,
  email: String,
  avatar: String,
  followers: [{ type: Schema.Types.ObjectId, path: "user" }],
  subreddits: [{ type: Schema.Types.ObjectId, path: "subreddit" }],
  bookmarks: [{ type: Schema.Types.ObjectId, path: "post" }],
  posts: [{ type: Schema.Types.ObjectId, path: "post" }],
  comments: [{ type: Schema.Types.ObjectId, path: "comment" }],
  date: String,
});

const Post = mongoose.model("user", userSchema);

export default Post;

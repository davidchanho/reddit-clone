import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
  _id: String,
  name: String,
  email: String,
  avatar: String,
  followers: [{ type: Schema.Types.ObjectId, ref: "user" }],
  subreddits: [{ type: Schema.Types.ObjectId, ref: "subreddit" }],
  bookmarks: [{ type: Schema.Types.ObjectId, ref: "post" }],
  posts: [{ type: Schema.Types.ObjectId, ref: "post" }],
  comments: [{ type: Schema.Types.ObjectId, ref: "comment" }],
  date: String,
});

const Post = mongoose.model("user", userSchema);

export default Post;

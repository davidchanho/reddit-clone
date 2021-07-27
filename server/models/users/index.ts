import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: { type: String, required: true },
  followers: [{ type: Schema.Types.ObjectId, ref: "user" }],
  subreddits: [{ type: Schema.Types.ObjectId, ref: "subreddit" }],
  bookmarks: [{ type: Schema.Types.ObjectId, ref: "post" }],
  posts: [{ type: Schema.Types.ObjectId, ref: "post" }],
  comments: [{ type: Schema.Types.ObjectId, ref: "comment" }],
  date: { type: String, default: new Date().toString() },
});

const Post = mongoose.model("user", userSchema);

export default Post;

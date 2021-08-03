import mongoose from "mongoose";
import { MediaType } from "./../../../shared/types/posts/index";

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  subreddit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "subreddit",
    required: true,
  },
  mediaType: {
    type: String,
    enum: MediaType,
    default: MediaType.TEXT,
  },
  date: { type: String, default: new Date().toString() },
});

const Post = mongoose.model("post", postSchema);

export default Post;

import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comment" }],
  subreddit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "subreddit",
    required: true,
  },
  date: { type: String, default: new Date().toString() },
});

const Post = mongoose.model("post", postSchema);

export default Post;

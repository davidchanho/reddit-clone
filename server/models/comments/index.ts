import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  postId: { type: mongoose.Schema.Types.ObjectId, ref: "post", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  body: { type: String, required: true },
  likes: { type: Number, default: 0 },
  date: { type: String, default: new Date().toString() },
});

const Comment = mongoose.model("comment", commentSchema);

export default Comment;

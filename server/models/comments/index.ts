import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  _id: String,
  postId: { type: mongoose.Schema.Types.ObjectId, ref: "post" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  body: String,
  likes: Number,
  date: String,
});

const Comment = mongoose.model("comment", commentSchema);

export default Comment;

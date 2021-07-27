import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  _id: String,
  postId: String,
  userId: String,
  body: String,
  likes: Number,
  date: String,
});

const Comment = mongoose.model("comment", commentSchema);

export default Comment;

import mongoose, { Schema } from "mongoose";
import { Role } from "./../../../shared/types/users/index";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  avatar: { type: String, required: true },
  password: { type: String, required: true },
  followers: [{ type: Schema.Types.ObjectId, ref: "user" }],
  subreddits: [{ type: Schema.Types.ObjectId, ref: "subreddit" }],
  bookmarks: [{ type: Schema.Types.ObjectId, ref: "post" }],
  date: { type: String, default: new Date().toString() },
  karma: { type: Number },
  role: {
    type: String,
    enum: Role,
    default: Role.USER,
  },
});

const User = mongoose.model("user", userSchema);

export default User;

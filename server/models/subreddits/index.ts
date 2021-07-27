import mongoose from "mongoose";

const subredditSchema = new mongoose.Schema({
  _id: String,
  name: String,
  icon: String,
});

const Subreddit = mongoose.model("subreddit", subredditSchema);

export default Subreddit;

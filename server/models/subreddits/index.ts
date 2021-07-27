import mongoose from "mongoose";

const subredditSchema = new mongoose.Schema({
  name: { type: String, required: true },
  icon: { type: String, required: true },
});

const Subreddit = mongoose.model("subreddit", subredditSchema);

export default Subreddit;

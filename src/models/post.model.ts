import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  caption: {
    type: String,
  },
  author: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
  liked_by: [
    {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
  ],
});

export const Post = mongoose.model("post", postSchema);

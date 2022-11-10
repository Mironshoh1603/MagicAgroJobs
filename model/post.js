const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
  head: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
  userId: {
    type: mongoose.Schema.ObjectId,
  },
});

const Post = mongoose.model("posts", postSchema);

module.exports = Post;

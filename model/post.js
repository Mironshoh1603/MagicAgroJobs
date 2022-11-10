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
  
});

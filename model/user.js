const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["worker", "employer", "admin"],
  },
});
const User = new mongoose.model("users", userSchema);

module.exports = User;

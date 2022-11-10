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
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  village: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    enum: ["worker", "employer"],
    required: true,
  },

  role: {
    type: String,
    enum: ["worker", "employer", "admin"],
  },
});
const User = mongoose.model("users", userSchema);

module.exports = User;

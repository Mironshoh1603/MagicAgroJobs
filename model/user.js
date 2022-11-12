const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    passwordConfirm: {
      type: String,
      required: true,
    },
    regionId: {
      type: String,
      required: true,
    },
    districtId: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["worker", "employer", "admin"],
    },
    photo: {
      type: String,
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("users", userSchema);

module.exports = User;

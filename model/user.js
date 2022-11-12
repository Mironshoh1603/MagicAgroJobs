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
    regionId: {
      type: mongoose.Schema.ObjectId,
      required: true,
    },
    districtId: {
      type: mongoose.Schema.ObjectId,
      required: true,
    },
    role: {
      type: String,
      enum: ["worker", "employer", "admin"],
    },
    img: {
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

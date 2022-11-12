const mongoose = require("mongoose");
const applySchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.ObjectId,
      required: true,
    },
    jobId: {
      type: mongoose.Schema.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Apply = mongoose.model("applies", applySchema);

module.exports = Apply;

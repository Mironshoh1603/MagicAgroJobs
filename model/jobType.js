const mongoose = require("mongoose");

const typeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "users",
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);
typeSchema.virtual("users", {
  ref: "users",
  foreignField: "_id",
  localField: "userId",
});

const Type = mongoose.model("types", typeSchema);

module.exports = Type;

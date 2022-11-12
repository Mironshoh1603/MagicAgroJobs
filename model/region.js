const mongoose = require("mongoose");

const regionSchema = mongoose.Schema(
  {
    name_uz: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

regionSchema.virtual("districts", {
  ref: "districts",
  foreignField: "region_id",
  localField: "_id",
});

const Region = mongoose.model("regions", regionSchema);

module.exports = Region;

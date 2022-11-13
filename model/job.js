const mongoose = require("mongoose");
const jobSchema = mongoose.Schema(
  {
    title: {
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
      required: true,
    },
    typeId: {
      type: mongoose.Schema.ObjectId,
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
    photo: {
      type: String,
      default: "user",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

jobSchema.virtual("user", {
  ref: "users",
  localField: "userId",
  foreignField: "_id",
});
jobSchema.virtual("type", {
  ref: "types",
  localField: "typeId",
  foreignField: "_id",
});
jobSchema.virtual("region", {
  ref: "regions",
  localField: "regionId",
  foreignField: "_id",
});
jobSchema.virtual("district", {
  ref: "districts",
  localField: "districtId",
  foreignField: "_id",
});


const Job = mongoose.model("jobs", jobSchema);

module.exports = Job;

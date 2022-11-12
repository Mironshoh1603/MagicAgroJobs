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
    img: {
      type: String,
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
      type: mongoose.Schema.ObjectId,
      required: true,
    },
    districtId: {
      type: mongoose.Schema.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

const Job = mongoose.model("jobs", jobSchema);

module.exports = Job;

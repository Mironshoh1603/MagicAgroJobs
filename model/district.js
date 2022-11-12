const mongoose = require("mongoose");

const districtSchema = mongoose.Schema({
  name_uz: {
    type: String,
    required: true,
  },
  region_id: {
    type: mongoose.Schema.ObjectId,
    ref: "regions",
    required: true,
  },
});

const District = mongoose.model("districts", districtSchema);

module.exports = District;

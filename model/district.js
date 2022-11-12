const mongoose = require("mongoose");

const districtSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const District = mongoose.model("districts", districtSchema);

module.exports = District;

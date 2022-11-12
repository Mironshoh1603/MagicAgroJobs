const mongoose = require("mongoose");

const regionSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Region = mongoose.model("regions", regionSchema);

module.exports = Region;

const mongoose = require("mongoose");

module.exports = mongoose
  .connect(process.env.DB, {})
  .then(() => {
    console.log("Db connected");
  })
  .catch((err) => {
    console.log(err);
  });

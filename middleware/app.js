const express = require("express");
const user = require("./../route/user");

const app = express();

app.use("/api/v1/users/", user);
module.exports = app;

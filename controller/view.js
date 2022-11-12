const Post = require("../model/job");
const User = require("./../model/user");
const Region = require("./../model/region");
const home = async (req, res, next) => {
  try {
    res.render("home");
  } catch (error) {
    console.log(error);
  }
};

const jobs = async (req, res, next) => {
  try {
    res.render("jobs");
  } catch (error) {
    console.log(error);
  }
};

const jobDetail = async (req, res, next) => {
  try {
    res.render("jobDetail");
  } catch (error) {
    console.log(error);
  }
};
const contact = async (req, res, next) => {
  try {
    console.log("hello");
    res.render("contact");
  } catch (error) {
    console.log(error);
  }
};
const login = async (req, res, next) => {
  try {
    res.render("login", {});
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res, next) => {
  try {
    const regions = await Region.find().populate({
      path: "districts",
      select: "name_uz _id",
    });
    res.render("register", {
      regions,
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { home, jobs, jobDetail, contact, login, register };

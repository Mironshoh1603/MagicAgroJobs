const Post = require("./../model/post");
const User = require("./../model/user");

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
    res.render("login");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res, next) => {
  try {
    res.render("register");
  } catch (error) {
    console.log(error);
  }
};
module.exports = { home, jobs, jobDetail, contact, login, register };

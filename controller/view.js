const User = require("./../model/user");
const Region = require("./../model/region");
const jwt = require("jsonwebtoken");
const Job = require("../model/job");
const Type = require("./../model/jobType");

const userRole = async (req, res, next) => {
  let user;

  if (req.cookies.token) {
    jwt.verify(req.cookies.token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return next(err(403, "Toke is invallid"));
      }
      req.user = user;
    });
    user = await User.findById(req.user.id);

    return user;
  } else {
    user = false;
    return user;
  }
};

const home = async (req, res, next) => {
  try {
    let user = await userRole(req, res, next);

    const works = await Job.find().limit(6);

    res.render("home", {
      user,
    });
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

const logout = async (req, res, next) => {
  try {
    if (req.cookies) {
      res.clearCookie("token", null, {
        httpOnly: true,
      });
    }
    res.redirect("/home");
  } catch (error) {
    console.log(error);
  }
};

const createJob = async (req, res, next) => {
  try {
    res.render("createType");
  } catch (error) {
    console.log(error);
  }
};
const createType = async (req, res, next) => {
  try {
    let user = await userRole(req, res, next);

    const types = await Type.find().populate({
      path: "users",
      select: "name",
    });

    console.log(types);
    res.render("createType", {
      user,
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  home,
  jobs,
  jobDetail,
  contact,
  login,
  register,
  logout,
  createJob,
  createType,
};

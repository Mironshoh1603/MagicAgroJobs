const User = require("../models/userModel");
const catchErrorAsync = require("../utility/catchErrorAsync");
const jwt = require("jsonwebtoken");
const AppError = require("../utility/appError");
const bcrypt = require("bcryptjs");
const mail = require("../utility/mail");
const crypto = require("crypto");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const saveTokenCookie = (token, res, req) => {
  res.cookie("jwt", token, {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: req.protocol === "https" ? true : false,
  });
};

const signup = catchErrorAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);

  const token = createToken(newUser._id);

  saveTokenCookie(token, res, req);

  res.status(200).json({
    status: "success",
    token: token,
    data: newUser,
  });
});

const signIn = async (req, res, next) => {
  try {
    const user = await User.findOne({ name: req.body.name });
    if (!user) {
      return next(createError(404, "Usr not found"));
    }

    const isCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isCorrect) {
      return next(createError(404, "Wrong pAssword"));
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    const { password, ...others } = user._doc;
    res
      .cookie("token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({
        token,
        others,
      });
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

const google = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res
        .cookie("token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(user._doc);
    } else {
      const newUser = new User({
        ...req.body,
        fromGoogle: true,
      });
      const savedUser = await newUser.save();
      console.log(savedUser);
      const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET);
      res
        .cookie("token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(savedUser._doc);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { signIn, signUp, google };

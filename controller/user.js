const User = require("./../model/user");
const AppError = require("../utility/appError");
const multer = require("multer");
const sharp = require("sharp");

const getOne = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};

const add = async (req, res, next) => {
  try {
    const role = await User.findById(req.user.id);
    if (role.role != "admin") {
      return next(new AppError("SIz admin emassiz", 404));
    }
    const user = await User.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
};
const update = async (req, res, next) => {
  try {
    if (req.params.id != req.user.id) {
      return next(
        new AppError("Siz faqat o'zingizni hisobingizni o'chira olasiz", 404)
      );
    }
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(203).json(user);
  } catch (error) {
    console.log(error);
  }
};

const deleteData = async (req, res, next) => {
  try {
    if (req.params.id != req.user.id) {
      return next(
        new AppError("Siz faqat o'zingizni hisobingizni o'chira olasiz", 404)
      );
    }
    await User.findByIdAndDelete(req.params.id);

    res.status(204).json("okay");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getOne,
  getAll,
  deleteData,
  update,
  add,
};

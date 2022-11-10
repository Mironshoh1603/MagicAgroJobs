const { findById } = require("./../model/post");
const Post = require("./../model/post");

const AppError = require("./../utility/appError");

const add = async (req, res, next) => {
  const post = await Post.create({ ...req.body, userId: req.user.id });

  res.status(201).json(post);
};

const getAll = async (req, res, next) => {
  const posts = await Post.find();
  res.status(200).json(posts);
};

const getOne = async (req, res, next) => {
  const post = await Post(findById(req.params.id));

  res.status(200).json(post);
};

const update = async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  if (req.user.id != post.userId) {
    return next(
      new AppError("siz faqat o'zingizni postalringizni o'zgartira olasiz", 404)
    );
  }

  const newPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(203).json(newPost);
};

const deletePost = async (req, res, next) => {
  const post = await Post.findById(req.params.id);

  if (req.user.id != post.userId) {
    return next(
      new AppError("Siz faqat o'zingizning postlaringizni o'chira olasiz")
    );
  }

  await Post.findByIdAndDelete(req.params.id);
  res.status(204).json("okay");
};

module.exports = { getAll, getOne, update, deletePost, add };

const AppError = require("./../utility/appError");

const Comment = require("./../model/comment");

const getAll = async (req, res, next) => {
  try {
    const comments = await Comment.find({ jobId: req.params.id });
    res.status(200).json(comments);
  } catch (error) {
    console.log(error);
  }
};

const add = async (req, res, next) => {
  try {
    const comment = await Comment.create({
      content: req.body.content,
      jobId: req.params.jobId,
      userId: req.user.id,
    });
    res.status(201).json(comment);
  } catch (error) {
    console.log(error);
  }
};

const deleteData = async (req, res, next) => {
  try {
    const comment = await Comment.findbyId(req.params.id);

    if (comment.userId != req.user.id) {
      return next(
        new AppError("Siz faqat o'zingizning commentlaringizni o'cira olasiz")
      );
    }

    await Comment.findByIdAndDelete(req.params.id);
    res.status(204).json("delete");
  } catch (error) {
    console.log(error);
  }
};
const update = async (req, res, next) => {
  try {
    const comment = await Comment.findbyId(req.params.id);

    if (comment.userId != req.user.id) {
      return next(
        new AppError(
          "Siz faqat o'zingizning commentlaringizni updata qila olasiz"
        )
      );
    }

    const newComment = await Comment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(204).json(newComment);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAll, add, deleteData, update };

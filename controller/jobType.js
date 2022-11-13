const AppError = require("./../utility/appError");
const Type = require("./../model/jobType");

const add = async (req, res, next) => {
  try {
    const type = await Type.create({
      name: req.body.name,
      userId: req.user.id,
    });
    res.status(201).json(type);
  } catch (error) {
    console.log(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const types = await Type.find().populate({ path: "users" });
    res.status(200).json(types);
  } catch (error) {
    console.log(error);
  }
};
const deleteData = async (req, res, next) => {
  try {
    const type = await Type.findById(req.params.id);

    if (req.user.id != type.userId) {
      return next(
        new AppError("Siz faqat o'zingizning tyoelaringizni o'cira olasiz")
      );
    }

    await Type.findByIdAndDelete(req.params.id);
    res.status(204).jaon("okay");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAll,
  add,
  deleteData,
};

const app = require("../middleware/app");
const Apply = require("./../model/apply");

const getAll = async (req, res, next) => {
  try {
    const applies = await Apply.findById({ jobId: req.params.id });

    res.status(200).json(applies);
  } catch (error) {
    console.log(error);
  }
};

const add = async (req, res, next) => {
  try {
    const apply = await Apply.create({
      userId: req.user.id,
      jobId: req.params.id,
    });

    res.status(201).json(apply);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAll,
  add,
};

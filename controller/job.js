const Job = require("./../model/job");

const AppError = require("./../utility/appError");

const add = async (req, res, next) => {
  console.log(req.body);
  const job = await Job.create({ ...req.body, userId: req.user.id });

  res.status(201).json(job);
};

const getAll = async (req, res, next) => {
  const jobs = await Job.find();
  res.status(200).json(jobs);
};

const getOne = async (req, res, next) => {
  const job = await Job.findById(req.params.id);

  res.status(200).json(job);
};

const update = async (req, res, next) => {
  const job = await Job.findById(req.params.id);
  if (req.user.id != job.userId) {
    return next(
      new AppError("siz faqat o'zingizni jobalringizni o'zgartira olasiz", 404)
    );
  }

  const newjob = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(203).json(newjob);
};

const deletejob = async (req, res, next) => {
  const job = await Job.findById(req.params.id);

  if (req.user.id != job.userId) {
    return next(
      new AppError("Siz faqat o'zingizning joblaringizni o'chira olasiz")
    );
  }
  await Job.findByIdAndDelete(req.params.id);
  res.status(204).json("okay");
};

module.exports = { getAll, getOne, update, deletejob, add };

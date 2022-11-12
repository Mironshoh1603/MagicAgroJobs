const path = require("path");
const multer = require("multer");
const sharp = require("sharp");

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    return cb(null, true);
  } else {
    return cb(new AppError("You only upload images!", 400));
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

const uploadImage = upload.single("photo");

const resize = (req, res, next) => {
  console.log("sddfsfsf:" + req.file);
  if (!req.file) {
    return next();
  }
  console.log("Hello");
  req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;
  sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat("jpeg")
    .jpeg()
    .toFile("public/img/users");
  next();
};

module.exports = { uploadImage, resize };

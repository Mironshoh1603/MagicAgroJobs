const router = require("express").Router();
const auth = require("./../controller/auth");
const upload = require("./../controller/upload");
router.route("/signup").post(upload.uploadImage, upload.resize, auth.signUp);
router.route("/signin").post(auth.signIn);

module.exports = router;

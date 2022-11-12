const router = require("express").Router();
const auth = require("./../controller/auth");
const upload = require("./../controller/upload");
router.route("/signup").post(upload.single("photo"), (req, res, next) => {
  console.log(req.body);
});
router.route("/signin").post(auth.signIn);

module.exports = router;

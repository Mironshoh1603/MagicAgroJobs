const router = require("express").Router();
const auth = require("./../controller/auth");

router.route("/signup").post(auth.signUp);
router.route("/signin").post(auth.signIn);

module.exports = router;

const router = require("express").Router();
const auth = require("./../controller/auth");

router.route("/signup", auth.signUp);
router.route("/signin", auth.signIn);

module.exports = router;

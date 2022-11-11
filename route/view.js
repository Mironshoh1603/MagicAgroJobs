const router = require("express").Router();
const view = require("./../controller/view");
router.route("/home").get(view.home);
router.route("/jobs").get(view.jobs);
router.route("/:jobId").get(view.jobDetail);
router.use("/login", view.login);
router.use("/register", view.register);
module.exports = router;

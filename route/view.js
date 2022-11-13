const router = require("express").Router();
const view = require("./../controller/view");
router.route("/home").get(view.home);
router.route("/jobs").get(view.jobs);
router.route("/contact").get(view.contact);
router.route("/register").get(view.register);
router.route("/login").get(view.login);
router.route("/createJob").get(view.createJob);
router.route("/createType").get(view.createType);

router.use("/logout", view.logout);

router.route("/:jobId").get(view.jobDetail);

module.exports = router;

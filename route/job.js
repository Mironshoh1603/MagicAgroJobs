const router = require("express").Router();
const job = require("../controller/job");
const verify = require("../verify");

router.route("/").get(job.getAll).post(verify, job.add);

router
  .route("/:id")
  .get(job.getAll)
  .patch(verify, job.update)
  .delete(verify, job.deletejob);

module.exports = router;

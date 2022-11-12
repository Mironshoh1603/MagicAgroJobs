const router = require("express").Router();
const verify = require("./../verify");
const comment = require("./../controller/comment");

router.route("/:jobId").get(comment.getAll).post(verify, comment.add);

router
  .route("/:id")
  .patch(verify, comment.update)
  .delete(verify, comment.deleteData);

module.exports = router;

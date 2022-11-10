const router = require("express").Router();
const post = require("./../controller/post");
const verify = require("./../verify");

router.route("/").get(post.getAll).post(verify, post.add);

router
  .route("/:id")
  .get(post.getAll)
  .patch(verify, post.update)
  .delete(verify, post.deletePost);

module.exports = router;

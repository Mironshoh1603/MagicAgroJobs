const router = require("express").Router();
const user = require("./../controller/user");
const verify = require("./../verify");
router.route("/").get(user.getAll).post(verify, user.add);

router
  .route("/:id")
  .get(user.getOne)
  .patch(verify, user.update)
  .delete(verify, user.deleteData);

module.exports = router;

const router = require("express").Router();
const user = require("./../controller/user");

router.route("/").get(user.getAll).post(user.add);

router
  .route("/:id")
  .get(user.getOne)
  .patch(user.update)
  .delete(user.deleteData);

module.exports = router;

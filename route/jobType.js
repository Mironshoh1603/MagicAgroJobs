const router = require("express").Router();
const verify = require("./../verify");
const type = require("./../controller/jobType");

router.route("/").get(type.getAll).post(verify, type.add);
router.route("/:id").delete(type.deleteData);
module.exports = router;

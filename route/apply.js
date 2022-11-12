const router = require("express").Router();
const verify = require("./../verify");
const apply = require("./../controller/apply");
const app = require("../middleware/app");

router.route("/:jobId").get(apply.getAll).post(verify, apply.add);

module.exports = router;

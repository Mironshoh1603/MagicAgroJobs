const router = require("express").Router();
const region = require("./../controller/region");

router.route("/").get(region.get).post(region.add);
module.exports = router;

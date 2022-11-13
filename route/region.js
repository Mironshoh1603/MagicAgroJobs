const router = require("express").Router();
const region = require("./../controller/region");

router.route("/").get(region.get).post(region.add);
router.route("/:id").get(region.getOne);
module.exports = router;

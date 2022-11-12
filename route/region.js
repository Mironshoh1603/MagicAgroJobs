const router = require("express").Router();
const region = require("./../controller/region");

router.route("/").get(region.get);
router.route("/:id").get(region.getOne);
module.exports = router;

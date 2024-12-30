const ratingController = require("../controllers/rating.controller");

const router = require("express").Router();

router.route("/:id").post(ratingController.create).get(ratingController.read);

router.route("/delete").post(ratingController.remove);

module.exports = router;

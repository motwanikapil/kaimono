const categoryController = require("../controllers/category.controller");
const router = require("express").Router();

router.route("/").get(categoryController.read).post(categoryController.create);

router
  .route("/:id")
  .put(categoryController.update)
  .delete(categoryController.remove);

module.exports = router;

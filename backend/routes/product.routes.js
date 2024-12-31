const router = require("express").Router();
const productController = require("../controllers/product.controller");
const { isAdmin } = require("../middlewares/auth.middleware");

router
  .route("/")
  .get(productController.read)
  .post(isAdmin, productController.create);

router
  .route("/:id")
  .get(productController.readOne)
  .delete(isAdmin, productController.remove)
  .put(isAdmin, productController.update);

module.exports = router;

const router = require("express").Router();
const productController = require("../controllers/product.controller");
const { isAdmin } = require("../middlewares/auth.middleware");

router
  .route("/")
  .get(productController.read)
  .post(isAdmin, productController.create)
  .put(isAdmin, productController.update);

router
  .route("/:id")
  .get(productController.readOne)
  .delete(isAdmin, productController.remove);

module.exports = router;

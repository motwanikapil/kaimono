const router = require("express").Router();
const orderController = require("../controllers/order.controller");
const { isAdmin, isUserLoggedIn } = require("../middlewares/auth.middleware");

router
  .route("/")
  .get(isAdmin, orderController.read)
  .post(isUserLoggedIn, orderController.create);

router
  .route("/:id")
  .get(orderController.readOne)
  .delete(isUserLoggedIn, orderController.remove)
  .put(isAdmin, orderController.update);

module.exports = router;

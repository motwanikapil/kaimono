const router = require("express").Router();
const orderController = require("../controllers/order.controller");
const { isAdmin } = require("../middlewares/auth.middleware");

router
  .route("/")
  .get(orderController.read)
  .post(isAdmin, orderController.create)
  .put(isAdmin, orderController.update);

router
  .route("/:id")
  .get(orderController.readOne)
  .delete(isAdmin, orderController.remove);

module.exports = router;

const router = require("express").Router();
const addressController = require("../controllers/address.controller");
const { isAdmin } = require("../middlewares/auth.middleware");

router
  .route("/")
  .post(isAdmin, addressController.create)
  .get(addressController.read);

router
  .route("/:id")
  .get(addressController.readOne)
  .delete(isAdmin, addressController.remove)
  .put(isAdmin, addressController.update);

module.exports = router;

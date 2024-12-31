const router = require("express").Router();
const wishlistController = require("../controllers/wishlist.controller");
const { isAdmin, isUserLoggedIn } = require("../middlewares/auth.middleware");

router
  .route("/")
  .get(isAdmin, wishlistController.read)
  .post(isUserLoggedIn, wishlistController.create)
  .put(isUserLoggedIn, wishlistController.update);

router
  .route("/:id")
  .get(isUserLoggedIn, wishlistController.readOne)
  .delete(isAdmin, wishlistController.remove)
  .post(isUserLoggedIn, wishlistController.removeItems)
  .put(isUserLoggedIn, wishlistController.update);

module.exports = router;

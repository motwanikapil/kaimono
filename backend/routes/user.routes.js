const express = require("express");
const router = express.Router();

const authController = require("../controllers/user.controller");
const validate = require("../middlewares/validate.middleware");
const {
  isLoggedIn,
  isAdmin,
  isUserLoggedIn,
} = require("../middlewares/auth.middleware");

const { loginSchema, signupSchema } = require("../utils/schemas");

router.route("/register").post(validate(signupSchema), authController.signup);

router
  .route("/login")
  .post(validate(loginSchema), isLoggedIn, authController.login);

router.route("/logout").get(authController.logout);

router.route("/").get(isAdmin, authController.read);

router.route("/:id").put(isUserLoggedIn, authController.update);

module.exports = router;

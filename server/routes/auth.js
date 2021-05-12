const express = require("express");
const router = express.Router();
const { signup } = require("../controllers/auth.js");

// validators
const { runValidation } = require("../validators/index");
const {
  userSignupValidation,
  userSigninValidation,
} = require("../validators/auth");

router.post("/signup", userSignupValidation, runValidation, signup);
router.post("/signin", userSigninValidation, runValidation, signin);

module.exports = router;

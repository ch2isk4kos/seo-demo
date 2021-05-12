const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  signout,
  requireSignin,
} = require("../controllers/auth.js");

// validators
const { runValidation } = require("../validators/index");
const {
  userSignupValidation,
  userSigninValidation,
} = require("../validators/auth");

router.post("/signup", userSignupValidation, runValidation, signup);
router.post("/signin", userSigninValidation, runValidation, signin);
router.get("/signout", signout);

// test
router.get("/secret", requireSignin, (req, res) => {
  res.json({
    message: "This is a protected route that has restricted access.",
  });
});

module.exports = router;

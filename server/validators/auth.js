const { check } = require("express-validator");

exports.userSignupValidation = [
  check("name").not().isEmpty().withMessage("name is required"),
  check("email").isEmail().withMessage("must be a valid email"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("password must be min 6 characters"),
];

exports.userSigninValidation = [
  check("email").isEmail().withMessage("must be a valid email"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("password must be min 6 characters"),
];

const User = require("../models/user");
const shortId = require("shortid");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt"); // checks to see if token has expired

exports.signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (user) {
      return res.status(400).json({ error: "Email address in use" });
    }

    const { name, email, password } = req.body;
    let username = shortId.generate();
    let profile = `${process.env.CLIENT_URL}/profile/${username}`;

    let newUser = new User({ username, name, email, profile, password });

    newUser.save((err, success) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      // res.json({
      //   user: success,
      // });
      res.json({
        message: "Signup Successful",
      });
    });
  });
};

exports.signin = (req, res) => {
  const { email, password } = req.body;

  // check if user exists
  User.findOne({ email: email }).exec((err, user) => {
    console.log(user);
    if (err || !user) {
      return res.status(400).json({ error: "Email not found" });
    }

    // authenticate user
    if (!user.authenticateUser(password)) {
      return res.status(400).json({ error: "Email and password do not match" });
    }

    // generate jwt -> userId && secret
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, { expiresIn: "1d" });

    const { _id, username, name, email, role } = user;
    return res.json({ token, user: { _id, username, name, email, role } });
  });
};

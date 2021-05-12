const mongoose = require("mongoose");
const crypto = require("crypto");

const userSchema = new mongoose.Model(
  {
    username: {
      type: String,
      trim: true,
      max: 32,
      lowercase: true,
      index: true,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      trim: true,
      max: 32,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      // index: true,
      unique: true,
      required: true,
    },
    profile: {
      type: String,
      required: true,
    },
    hashed_password: {
      type: String,
      required: true,
    },
    salt: String,
    about: {
      type: String,
    },
    role: {
      type: Number,
      trim: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    resetPasswordLink: {
      data: String,
      default: "",
    },
  },
  { timeStamp: true }
);

// virtual fields
userSchema
  .virtual("password")
  .set(function (password) {
    // create tempory password variable
    this._password = password;
    // generate salt
    this.salt = this.makeSalt();
    // encrypt password
    this.hashed_password = this.ecryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

// user schmea methods
userSchema.methods = {
  authenticateUser: function (string) {
    return this.encryptPassword(string);
  },
  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return `${err}`;
    }
  },
  makeSalt: function () {
    return Math.round(new Date().valueOf() * Math.random() + "");
  },
};

module.exports = mongoose.model("User", userSchema);

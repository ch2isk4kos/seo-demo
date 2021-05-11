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

module.exports = mongoose.model("User", userSchema);

const express = require("express");
const { param } = require(".");
const User = require("../models/User");
const router = express.Router();

router.get("/", async function (req, res, next) {
  try {
    const allUsers = await User.find();
    res.json(allUsers);
  } catch (err) {
    next(err);
  }
});

router.patch("/me", async function (req, res, next) {
  try {
    const paramUser = req.session.currentUser;
    const userContent = req.body;
    const updateUser = await User.findByIdAndUpdate(paramUser, userContent);
    res.json(updateUser);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

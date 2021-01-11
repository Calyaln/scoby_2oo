var express = require("express");
const Item = require("../models/Item");
var router = express.Router();

router.get("/", async function (req, res, next) {
  try {
    const allItems = await Item.find();
    res.json(allItems);
  } catch (err) {
    next(err);
  }
});

router.post("/", async function (req, res, next) {
  try {
    const itemContent = req.body;
    // call the user id here
    itemContent.id_user = req.session.currentUser;
    console.log(itemContent);
    console.log(req.session.currentUser);
    const itemDb = await Item.create(itemContent);
    res.json(itemDb);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async function (req, res, next) {
  try {
    const paramItem = req.params.id;
    const oneItem = await Item.findById(paramItem);
    res.json(oneItem);
  } catch (err) {
    next(err);
  }
});

router.patch("/:id", async function (req, res, next) {
  try {
    const paramItem = req.params.id;
    const updateItem = await Item.findByIdAndUpdate(paramItem);
    res.json(updateItem);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async function (req, res, next) {
  try {
    const paramItem = req.params.id;
    const deleteItem = await Item.findByIdAndDelete(paramItem);
    res.json(deleteItem);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

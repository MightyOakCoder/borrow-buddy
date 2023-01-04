var express = require('express');
var router = express.Router();
const itemsCtrl = require("../controllers/items")
const isLoggedIn = require("../config/auth.js")

//GET /items - show all items
router.get("/", itemsCtrl.index);

// GET /items/new - new item form
router.get("/new", isLoggedIn, itemsCtrl.new);

// GET /items/id - show details of a single item
router.get("/:id", itemsCtrl.show);

// POST /items - add new item
router.post("/", isLoggedIn, itemsCtrl.create)


router.get("/items/:id/edit", isLoggedIn, itemsCtrl.edit)
// router.delete("/items/:id", isLoggedIn, itemsCtrl.delete);
router.put("/items/:id", isLoggedIn, itemsCtrl.update);

module.exports = router;
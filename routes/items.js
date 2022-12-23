var express = require('express');
var router = express.Router();
const itemsCtrl = require("../controllers/items")
const isLoggedIn = require("../config/auth.js")

router.get("/", itemsCtrl.index);
/* GET users listing. */
router.get("/new", isLoggedIn, itemsCtrl.new);

router.get("/:id", itemsCtrl.show);

// POST /items
router.post("/", isLoggedIn, itemsCtrl.create)

module.exports = router;
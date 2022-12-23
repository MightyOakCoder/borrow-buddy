const express = require("express");
const router = express.Router();
const itemsCtrl = require("../controllers/items");
const isLoggedIn = require("../config/auth")

// GET /items/new
router.get("/new", itemsCtrl.new);

module.exports = router;
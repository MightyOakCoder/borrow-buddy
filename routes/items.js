var express = require('express');
var router = express.Router();
const itemsCtrl = require("../controllers/items")

router.get("/", itemsCtrl.index);
/* GET users listing. */
router.get("/new", itemsCtrl.new);

router.get("/:id", itemsCtrl.show);

// POST /items
router.post("/", itemsCtrl.create)

module.exports = router;
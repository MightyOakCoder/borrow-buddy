const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const isLoggedIn = require("../config/auth");

// router.post('/items/:id/comments', isLoggedIn, commentsCtrl.create);
// router.delete("/comments/:id", isLoggedIn, commentsCtrl.delete)


router.get("/comments/:id/edit", isLoggedIn, commentsCtrl.edit)
router.post("/items/:id/comments", isLoggedIn, commentsCtrl.create);
router.delete("/comments/:id", isLoggedIn, commentsCtrl.delete);
router.put("/comments/:id", isLoggedIn, commentsCtrl.update);

module.exports = router;
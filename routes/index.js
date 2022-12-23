var express = require('express');
var router = express.Router();
var passport = require("passport");


router.get('/', function(req, res, next) {
  res.redirect("/items/new");
});

router.get("/auth/google", passport.authenticate(
  "google", 
  {
    scope: ["profile", "email"]
  }
));

router.get("/oauth2callback", passport.authenticate(
  "google",
  {
    successRedirect: "/items/new",
    failureRedirect: "/items/new"
  }
))

router.get("/logout", function(req, res) {
  req.logout(function() {
    res.redirect("/items/new");
  });
});

module.exports = router;

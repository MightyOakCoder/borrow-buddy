const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const User = require("../model/user");

passport.use(
    new GoogleStrategy(
        // Configuration object
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK
    },
      // The verify callback function
    function(accessToken, refreshToken, profile, cb) {
        // a user has logged in with OAuth...
    }
));
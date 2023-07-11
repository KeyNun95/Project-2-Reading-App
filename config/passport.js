const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const UserModel = require("../models/user");
  //Require your User Model here!

// configuring Passport!
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  async function(accessToken, refreshToken, profile, cb) {
    // a user has logged in via OAuth!
    // refer to the lesson plan from earlier today in order to set this up
    try {
      let userDocument = await UserModel.findOne({ googleId: profile.id });
      if (userDocument) return cb(null, userDocument);
      userDocument = await UserModel.create({
        name: profile.displayName,
        googleId: profile.id,
        email: profile.emails[0].value,
        avatar: profile.photos[0].value
      });
      return cb(null, userDocument);
    } catch (err) {
      return cb(err);
    }
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function(userId, done) {
  // Find your User, using your model, and then call done(err, whateverYourUserIsCalled)
  // When you call this done function passport assigns the user document to req.user, which will 
  // be availible in every Single controller function, so you always know the logged in user
  const user = await UserModel.findById(userId);
  done(null, user);
});




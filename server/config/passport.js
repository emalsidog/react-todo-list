// Dependencies
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const jwt = require("jsonwebtoken");

// User model
const User = require("../models/User");

// Function to sign token
exports.getToken = (user) => {
  return jwt.sign(user, "My lovely bird", {});
};

// Verivy user
exports.verifyUser = passport.authenticate('jwt', {session: false});

// JWT strategy
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "My lovely bird",
};

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const user = await User.findOne({ _id: jwt_payload._id });
      if (!user) {
        return done(null, false);
      }
      return done(null, user);
    } catch (error) {
      console.error(error);
      return done(error, false);
    }
  })
);

// Local strategy
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (!user) return done(null, false);
        user.comparePasswords(password, done);
      } catch (error) {
        console.error(error);
      }
    }
  )
);

// Serializing & deserializing user
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});
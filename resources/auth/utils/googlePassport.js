/* eslint-disable no-shadow */
require('dotenv').config();
const passport = require('passport');
const bcrypt = require('bcrypt');
const uuid = require('uuid/v4');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const { insertUser, findUserBy } = require('../resources/auth/authModel');

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.GOOGLE_BACKEND_BASEURL}auth/google/callback`,
    },
    function(accessToken, refreshToken, profile, done) {
      const googleEmail = profile.emails[0].value;
      const salt = bcrypt.genSaltSync(Math.floor(Math.random() * 10) + 1);
      const encryptedId = bcrypt.hashSync(profile.id, salt, 10);
      findUserBy({ email: googleEmail })
        .then(user => {
          if (user) {
            done(null, user);
          } else {
            insertUser({
              id: uuid.v4(),
              password: encryptedId,
              email: googleEmail,
            })
              .then(user => {
                done(null, user);
              })
              .catch(err => {
                console.log(err);
              });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  )
);

module.exports = { Passport: passport };

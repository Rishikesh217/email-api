const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys.js');

passport.use(new GoogleStrategy({
    clientID : keys.googleClientID,
    clientSecret : keys.googleClientSecret,
    callbackURL : '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log('Access tokeN: ', accessToken);
    console.log('Refresh tokeN: ', refreshToken);
    console.log('Profile: ', profile);
}));
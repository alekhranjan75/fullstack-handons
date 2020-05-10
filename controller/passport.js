const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

const properties = require('../config/properties')

const GOOGLE_CLIENT_ID = properties.googleClientID;
const GOOGLE_CLIENT_SECRET = properties.googleClientSecret;


passport.use(new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, cb) => {
        console.log(accessToken)
        console.log(profile)
    }
));
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

const properties = require('../config/properties')
const User = require('../models/User')

const GOOGLE_CLIENT_ID = properties.googleClientID;
const GOOGLE_CLIENT_SECRET = properties.googleClientSecret;

// The user id (you provide as the second argument of the done function) is saved in the session and is later used to retrieve the whole object via the deserializeUser function.
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser( (id, done) => {
    User.findById(id)
    .then(user => {
        done(null, user);
    });
});

passport.use(new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
        User.findOne({googleID: profile.id})
        .then(existingUser => {
            if (existingUser) {
                //We already have that user
                console.log("User Already exist!!!")
                done(null, existingUser)
            } else {
                new User({googleID: profile.id})
                .save()
                .then(user => done(null, user))
            }
        })
        .catch(err => console.log(err))    
    }
));
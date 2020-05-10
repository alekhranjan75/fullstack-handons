const passport = require('passport')
const express = require('express');
const router = express.Router();

require('../controller/passport')

router.get('/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

router.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/login'
    }),
    (req, res) => {
        // Successful authentication, redirect home.
        res.redirect('/');
    });

module.exports = router
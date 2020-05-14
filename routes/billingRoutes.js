const express = require('express');
const stripeSecretKey = require('../config/properties').stripeSecretKey;
const stripe = require('stripe')(stripeSecretKey)
const requireLogin = require('../middlewares/requireLogin')
const router = express.Router();

router.post('/', requireLogin, (req, res) => {
    
    // console.log(req.body)
    stripe.charges.create({
        amount:500,
        currency: 'inr',
        description: '$5 for 5 emails',
        source: req.body.id, 
    })
    .then((result) => {
        req.user.credits +=5
        req.user.save()
        .then(user => res.send(user))
        console.log(result)
    }).catch((err) => {
        console.log(err)
    });
})
module.exports = router
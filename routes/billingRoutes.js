const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../client/middlewares/requireLogin');

module.exports = app => {   
    app.post('/api/stripe', requireLogin, async (req, res) => {
        const charge = await stripe.charges.create({
            amount      : 500,
            currency    : 'usd',
            source      : req.body.id,
            description : 'Payment for EmailBoi- $5 for 5 emails',
        })

        req.user.credits += 5;
        const user = await req.user.save();
        res.send(user);
    });
    
};
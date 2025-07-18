// prod file
module.exports = {
    cookieKey : process.env.COOKIE_KEY,
    googleClientID : process.env.GOOGLE_CLIENT_ID,
    googleClientSecret :process.env.GOOGLE_CLIENT_SECRET,
    mongoURI : process.env.MONGO_URI,
    stripePublishableKey : process.env.STRIPE_PUBLISHABLE_KEY,
    stripeSecretKey : process.env.STRIPE_SECRET_KEY,
};
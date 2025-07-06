const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

require('./models/user');

require('./services/passport');

const authRoutes = require('./routes/authRoutes');

mongoose.connect(keys.mongoURI);
const app = express();

app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge : 30*24*60*60*1000,
        keys : [keys.cookieKey],
    })
);

app.use((req, res, next) => {
    // Add no-op functions for compatibility with passport
    if (req.session) {
      req.session.regenerate = function(callback) {
        callback && callback();
      };
      req.session.save = function(callback) {
        callback && callback();
      };
    }
    next();
  });
  

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
require('./routes/billingRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    // Serve static files from the React app
    app.use(express.static('client/build'));

    // Handle React routing, return all requests to React app
    app.get('*', (req, res) => {
        res.sendFile(__dirname + 'client', 'build', 'index.html');
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);
const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./models/user');

require('./services/passport');

const authRoutes = require('./routes/authRoutes');

mongoose.connect(keys.mongoURI);
const app = express();

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

const PORT = process.env.PORT || 5000;

app.listen(PORT);
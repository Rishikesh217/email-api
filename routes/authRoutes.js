const passport = require('passport');

module.exports = app => {
    app.get('/auth/google', passport.authenticate('google', {
        scope : ['profile', 'email'],
    }));

    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/api/logout', (req, res) => {
        req.logout(function(err) {
            if (err) {
              return next(err);
            }
            res.send(req.user); // or res.send(), depending on your flow
          });
    });

    app.get('/api/currentUser', (req, res) => {
        res.send(req.user);
    });
};
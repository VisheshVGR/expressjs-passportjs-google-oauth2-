const express = require('express');
const passport = require('passport');
const session = require('express-session')

require('dotenv').config()
require('./auth')

const isLoggedIn = (req, res, next) => {
    req.user ? next() : res.sendStatus(401);
}

const app = express();
app.use(session({ secret: 'cats' }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send('<a href="/auth/google">Authenticate with Google</a>');
})

app.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }))

app.get('/google/callback', passport.authenticate('google', {
    successRedirect: '/protected',
    failureRedirect: '/auth/failure',
}))


app.get('/auth/failure', (req, res) => {
    res.send('Something went wrong');
})

app.get('/protected', isLoggedIn, (req, res) => {
    console.log(req.user)
    res.send('Hello to protected router ' + req.user.displayName);
})

app.get('/logout', (req, res) => {
    // req.logout(); 
    // req.session.destroy();
    // res.send("Goodbye");
    req.logout(function (err) {
        if (err) { return next(err); }
        req.session.destroy();
        res.send("Goodbye");
    });
})

app.listen(5000, () => {
    console.log("Listening on port : 5000");
})
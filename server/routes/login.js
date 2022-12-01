const express = require('express');
const loginRouter = express.Router();
const passport = require('passport');


loginRouter
.route('/')
.post(passport.authenticate('local', {
    successRedirect: 'http://localhost:3000',
    failureRedirect: 'http://localhost:3000/login'
}));

module.exports = loginRouter;
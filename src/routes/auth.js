const express = require('express')
const loginMiddleware = require('../middleware/redirect-to-login')
const router = express.Router()
const passport = require('passport')
const User = require('../models/user-model')

router.get('/login', loginMiddleware, (req, res, next) => {
    res.render('login')
})

router.post('/register', (req, res, next) => {
    User.register({username: req.body.username}, req.body.password, (err, done) => res.send('OK'))
})

router.post('/local',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/auth/login'
    })
)

router.get('/twitter', passport.authenticate('twitter'))

router.get('/twitter/callback',
    passport.authenticate('twitter', {
        successRedirect: '/',
        failureRedirect: '/auth/login'
    })
)

module.exports = router

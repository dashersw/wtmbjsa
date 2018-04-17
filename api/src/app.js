const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const TwitterStrategy = require('passport-twitter').Strategy
const LocalStrategy = require('passport-local').Strategy
const session = require('express-session')

const User = require('./models/user-model')

require('./database-connection')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.set('view engine', 'pug')
app.set('views', `${__dirname}/views`)

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use(session({ secret: 'wtmberlin', resave: true, saveUninitialized: true }))
app.use(passport.initialize())
app.use(passport.session())


const { TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET } = process.env

if (TWITTER_CONSUMER_KEY && TWITTER_CONSUMER_SECRET) {
    passport.use(new TwitterStrategy({
        consumerKey: TWITTER_CONSUMER_KEY,
        consumerSecret: TWITTER_CONSUMER_SECRET,
        callbackURL: "http://localhost:3000/auth/twitter/callback"
    }, (token, tokenSecret, profile, done) => {
        User.findOneAndUpdate({ username: profile.username }, profile, { upsert: true, new: true }, done)
    }))
}

passport.use(User.createStrategy())

const person = require('./routes/person')
const auth = require('./routes/auth')

app.use('/api/person', person)
app.use('/api/auth', auth)

app.get('/api', (req, res, next) => {
    res.render('index', { username: req.user && req.user.username })
})

module.exports = app

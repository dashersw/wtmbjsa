const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const User = new mongoose.Schema({}, {strict: false});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User)

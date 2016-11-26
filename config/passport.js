'use strict'

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/exampledb')

const User = mongoose.model('User', mongoose.Schema({
  username: String,
  password: String
},{collection: 'user'}))

passport.serializeUser((user, done) => done(null, user._id))
passport.deserializeUser((id, done) => User.findById(id, (err, user) => done(err, user)))

passport.use(new LocalStrategy(
  function(username, password, done){
    User.findOne({ username: username }).then(user => {
      console.log(user)
        if(!user) return done(null, false)
        else if(user.password == password) return done(null, { _id: user._id })
        else return done(null, false)
      })
      .catch(err => done(err))
    })
)

module.exports = passport

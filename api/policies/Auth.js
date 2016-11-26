'use strict'

const Policy = require('trails-policy')

/**
 * @module AuthPolicy
 * @description check if user is authenticated
 */
module.exports = class AuthPolicy extends Policy {
  authenticated(req, res, next){
    if(!req.user) return res.status(403).end()
    else next()
  }
}

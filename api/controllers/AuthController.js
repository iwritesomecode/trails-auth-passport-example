'use strict'

const Controller = require('trails-controller')

/**
 * @module AuthController
 * @description Generated Trails.js Controller.
 */
module.exports = class AuthController extends Controller {

  login(req, res, next) {
    console.log(req.body.password, req.body.username)
    this.app.config.passport.authenticate('local',{
      successRedirect: '/api/v1/default/info'
    })(req, res, next)
  }

  logout(req, res) {
    req.logout()
    return res.status(200).json({user: req.user})
  }
}

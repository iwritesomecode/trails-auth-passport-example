'use strict'

const Model = require('trails-model')

/**
 * @module User
 * @description Basic user model
 */
module.exports = class User extends Model {

  static config () {
  }

  static schema () {
    return {
      username: String,
      password: String
    }
  }
} 
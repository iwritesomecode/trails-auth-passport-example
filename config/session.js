'use strict'

const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

module.exports = {
  /**
   * Secret use by express for his session
   */
  secret: '2/nUvzuND6FjXxx6E;n8ojsjl&E1yclX',

  /**
   * Store use by express for saving his session
   */
   store: new MongoStore({
     url: 'mongodb://localhost:27017/exampledb'
   }),

  /**
   * Extras options pass to express session middleware
   */
  options: {}
}

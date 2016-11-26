'use strict'

module.exports = {
  database: {
    stores: {
      local: {
        migrate: 'create',
        uri: 'mongodb://localhost:27017/exampledb',
        options: {}
      }
    },
    models: {
      defaultStore: 'local',
      migrate: 'create'
    }
  }
}
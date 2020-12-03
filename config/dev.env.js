'use strict'
'use strict'

const config = require('./api')

module.exports =  {
  NODE_ENV: '"development"',
  BASE_API : config.apiUrl,
  BASE_TOKEN:config.baseToken
}
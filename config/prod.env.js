'use strict'
const config = require('./api')



module.exports =  {
  NODE_ENV: '"production"',
  BASE_API : config.apiUrl,
  BASE_TOKEN:config.baseToken,
  IMG_URL:config.imgUrl
}
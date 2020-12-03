'use strict'
const merge = require('webpack-merge')
const testdEnv = require('./test.env')

module.exports = merge(testdEnv, {
  NODE_ENV: '"test"',
  BASE_URL:'"http://81.69.47.52/tjx"'
})


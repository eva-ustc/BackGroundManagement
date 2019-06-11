'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"http://192.168.184.133:7300/mock/5af314a4c612520d0d7650c7"',
  BASE_API: '"https://www.easy-mock.com/mock/5cfce8654a477a721fb1aff2"',
})

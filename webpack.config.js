
const validate = require('webpack-validator')
const merge = require('webpack-merge')
const configDEV = require('./config/webpack-dev.js')
const configPROD = require('./config/webpack-prod.js')
const path = require('path')
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
}

let config
switch (process.env.npm_lifecycle_event) {
  case 'build':
    config = merge(configPROD.load(PATHS), {})
    break
  default:
    config = merge(configDEV.load(PATHS), {})
}

module.exports = validate(config)

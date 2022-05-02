require('dotenv').config()
const common = require('./common.js')

module.exports = common({
  mode: 'production',
  port: process.env.PORT,
  publicPath: `https://localhost:${process.env.PORT}/`
})

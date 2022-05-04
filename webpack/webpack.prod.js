require('dotenv').config()
const common = require('./common.js')

module.exports = common({
  mode: 'production',
  port: process.env.PORT,
  publicPath: 'https://boilerplate-02.querocriarsite.com/'
})

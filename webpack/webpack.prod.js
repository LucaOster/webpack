require('dotenv').config()
const common = require('./common.js')

module.exports = common({
  mode: 'production',
  port: process.env.PORT,
  publicPath: `https://react-webpack-styled-components-redux-tlk-boilerplate.vercel.app:${process.env.PORT}/`
})

/* eslint @typescript-eslint/no-var-requires: "off" */
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const dotenv = require('dotenv')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin, EnvironmentPlugin } = require('webpack')

const isDevelopment = process.env.ENVIRONMENT === 'DEV'
const isProduction = process.env.ENVIRONMENT === 'PRD'

const styledComponentsOptions = {
  displayName: true,
  fileName: false,
  namespace: process.env.NAME_APPLICATTION,
  sourceMap: true,
  pure: true
}

module.exports = env => ({
  mode: env.mode,
  entry: './src/main/index',
  devtool: 'source-map',
  output: {
    clean: true,
    publicPath: env.publicPath,
    chunkFilename: '[id].[contenthash].js'
  },
  optimization: {
    chunkIds: 'named',
    usedExports: true,
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all'
    },
    flagIncludedChunks: true
  },
  performance: {
    hints: false
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.ts', '.tsx', '.js']
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*'
    },
    port: env.port,
    historyApiFallback: true,
    hot: true,
    open: true,
    devMiddleware: { writeToDisk: true }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader']
      },
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          plugins: [['babel-plugin-styled-components', styledComponentsOptions]]
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'swc-loader',
          options: {
            parseMap: true,
            jsc: {
              parser: { syntax: 'typescript', tsx: true },
              target: 'es2021',
              minify: { compress: isProduction },
              transform: {
                react: {
                  runtime: 'automatic',
                  refresh: isDevelopment
                }
              }
            },
            minify: true
          }
        }
      },
      {
        test: /\.svg$/i,
        issuer: /\.tsx?$/,
        use: ['@svgr/webpack']
      },
      {
        test: /\.(png|jpg|svg|gif)$/i,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new EnvironmentPlugin({ ...process.env }),
    new DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed)
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.png',
      minify: isProduction,
      cache: true
    }),
    ...(isDevelopment ? [new ReactRefreshWebpackPlugin()] : [])
  ]
})

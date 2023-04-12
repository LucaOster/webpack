const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const dotenv = require('dotenv')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin, EnvironmentPlugin } = require('webpack')

const isDevelopment = process.env.ENVIRONMENT === 'DEV'

const styledComponentsOptions = {
  displayName: isDevelopment,
  fileName: false,
  namespace: process.env.NAME_APPLICATTION,
  sourceMap: isDevelopment,
  pure: true
}

module.exports = env => ({
  mode: env.mode,
  entry: './src/main/index',
  devtool: 'source-map',
  cache: { type: 'filesystem' },
  output: {
    clean: true,
    publicPath: env.publicPath,
    chunkFilename: isDevelopment ? '[name].js' : '[id].[contenthash:8].js'
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
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      cache: true
    }),
    ...(isDevelopment ? [new ReactRefreshWebpackPlugin()] : [])
  ]
})

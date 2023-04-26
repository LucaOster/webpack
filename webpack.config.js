const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const dotenv = require('dotenv')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {DefinePlugin, EnvironmentPlugin} = require('webpack')

const { PUBLIC_PATH, PORT, ENVIRONMENT } = process.env
const isLocal = ENVIRONMENT === 'LOCAL'
const mode = isLocal ? 'development' : 'production'

const styledComponentsOptions = {
  displayName: isLocal,
  fileName: isLocal,
  sourceMap: isLocal,
  pure: true
}

const minifyCode = {
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
}

module.exports = {
  mode,
  entry: './src/ui/index',
  devtool: isLocal ? 'eval-source-map' : 'source-map',
  cache: {type: 'filesystem'},
  output: {
    clean: isLocal,
    publicPath: `${PUBLIC_PATH}/`,
    chunkFilename: isLocal ? '[name].js' : '[id].[contenthash:8].js'
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
    port: PORT,
    historyApiFallback: true,
    hot: true,
    open: true,
    devMiddleware: {writeToDisk: true}
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
              parser: {syntax: 'typescript', tsx: true},
              target: 'es2022',
              transform: {
                react: {
                  runtime: 'automatic',
                  refresh: isLocal
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
        use: [{loader: '@svgr/webpack', options: {exportType: 'named'}}]
      },
      {
        test: /\.(webp|png|jp?g|svg|gif)$/i,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new EnvironmentPlugin({...process.env}),
    new DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed)
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.png',
      minify: isLocal ? false : minifyCode,
      cache: true
    }),
    ...(isLocal ? [new ReactRefreshWebpackPlugin()] : [])
  ]
}

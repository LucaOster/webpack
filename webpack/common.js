const ReactRefreshTypeScript = require('react-refresh-typescript')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const dotenv = require('dotenv')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin, EnvironmentPlugin } = require('webpack')
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin')

const isDevelopment = process.env.ENVIRONMENT === 'DEV'
const isProduction = process.env.ENVIRONMENT === 'PRD'

const styledComponentsOptions = {
  displayName: true,
  fileName: false,
  namespace: process.env.NAME_APPLICATTION,
  sourceMap: true
}

module.exports = env => ({
  mode: env.mode,
  entry: './src/index',
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
    emitOnErrors: isDevelopment,
    flagIncludedChunks: true,
    innerGraph: true
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx']
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
    open: true
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
          presets: ['@babel/preset-react', '@babel/preset-typescript'],
          plugins: [['babel-plugin-styled-components', styledComponentsOptions]]
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => ({
            before: [isDevelopment && ReactRefreshTypeScript()].filter(Boolean)
          }),
          transpileOnly: isDevelopment
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack'
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
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
    ...(isDevelopment ? [new HotModuleReplacementPlugin()] : []),
    ...(isDevelopment ? [new ReactRefreshWebpackPlugin()] : [])
  ]
})

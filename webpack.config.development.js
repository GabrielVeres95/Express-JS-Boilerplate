const { merge } = require('webpack-merge')
const path = require('path')

const config = require('./webpack.config')

module.exports = merge(config, {

  mode: 'development',

  devtool: 'inline-source-map',

  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '',
    clean: true
  },

  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, 'public')
    },
    devMiddleware: {
      writeToDisk: true
    }
  }

})

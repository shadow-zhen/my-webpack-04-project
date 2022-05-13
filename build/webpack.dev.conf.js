const { _resolve } = require('./utils')
const baseWebpackConfig = require('./webpack.base.conf')
const { merge } = require('webpack-merge');

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
      port: 9000,
      open: true,
      hot: true,
      compress: true,
      client: {
        logging: 'warn',
        overlay: true,
        progress: true,
      },
      static: {
        // directory: _resolve('../dist'),
        publicPath: '/static',
      }
    },
})

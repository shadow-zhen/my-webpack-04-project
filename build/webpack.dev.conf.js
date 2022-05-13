const baseWebpackConf = require('./webpack.base.conf')
const { merge } = require('webpack-merge');

module.exports = merge(baseWebpackConf, {
    mode: 'development'
})
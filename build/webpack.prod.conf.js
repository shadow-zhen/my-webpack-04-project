const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    devtool: false,
    plugins: [
      // 开启 BundleAnalyzerPlugin
      new BundleAnalyzerPlugin(),
    ],
})

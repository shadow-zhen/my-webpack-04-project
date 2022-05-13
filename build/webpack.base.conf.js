const { isProd, _resolve, pathInDiffEnv } = require('./utils')

// const webpack = require('webpack')
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    context: _resolve('../'),
    entry: _resolve('../src/main.js'),
    output: {
        filename: 'static/js/bundle.js',
        path: _resolve('../dist'),
        publicPath: '/', // 修改公共路徑
    },
    resolve: {
      extensions: ['.vue', '.mjs', '.js', '.json'],
      alias: {
        '@': _resolve('../src'),
        '@assets': _resolve('../src/assets'),
        // vue$: 'vue/dist/vue.runtime.esm.js',
      },
    },
    module: {
        rules: [
            {
              test: /\.vue$/,
              loader: 'vue-loader',
            },
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  cacheDirectory: true,
                },
              },
            },
            {
              test: /\.css$/i,
              use: [isProd ? {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: '../', // 修改公共路徑
                  }} : 'style-loader',
              'css-loader','postcss-loader'],
            },
            {
              test: /\.s[ac]ss$/i,
              use: [isProd ? {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: '../', // 修改公共路徑
                },
             } : 'style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                    loader: 'url-loader',
                    options: {
                        name: 'images/[name].[hash:8].[ext]',
                        limit: 8 * 1024,
                        esModule: false
                    },
                    },
                ],
            },
            {
              test: /\.(woff|woff2|eot|ttf|otf|)$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: 'static/font/[name].[hash:8].[ext]',
                    esModule: false
                  },
                },
              ],
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new Dotenv({
            path:pathInDiffEnv({ dev: './env/.env.development', prod: './env/.env.production' }),
            systemvars: true, // 允許讀取 process.env 下的任意系統變量
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[hash:8].css',
        }),
        new HtmlWebpackPlugin({
            template: _resolve('../public/index.html'),
            favicon:  _resolve('../public/favicon.ico')
        })
    ],
    optimization: {
      runtimeChunk: {
        name: 'manifest',
      },
      splitChunks: {
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
            name: 'vendors',
            enforce: true,
          },
          default: false,
        },
      },
    }
}

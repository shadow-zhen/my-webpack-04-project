const { isProd, _resolve, pathInDiffEnv } = require('./utils')

const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: _resolve('../src/index.js')
    },
    output: {
        filename: 'js/bundle.js',
        path: _resolve('../dist'),
        // publicPath: '/', // 修改公共路徑
    },
    resolve: {
      alias: {
        '@img': _resolve('../src/assets/images'),
        '@src': _resolve('../src'),
      },
    },
    module: {
        rules: [
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
                        limit: 10 * 1024
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
                    name: 'font/[name].[hash:8].[ext]',
                  },
                },
              ],
            },
        ],
    },
    plugins: [
        new Dotenv({
            path:pathInDiffEnv({ dev: './env/.env.development', prod: './env/.env.production' }),
            systemvars: true, // 允許讀取 process.env 下的任意系統變量
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:8].css',
        }),
        new HtmlWebpackPlugin({
            template: _resolve('../public/index.html'),
            favicon:  _resolve('../public/favicon.ico')
        }),
        // require('autoprefixer')()
    ]
}

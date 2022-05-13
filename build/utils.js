const { resolve } = require('path')
const isProd = process.env.NODE_ENV === "production"

exports.isProd = isProd

exports._resolve = function (path) {
    // console.log(resolve(__dirname, path))
    return resolve(__dirname, path)
}

exports.pathInDiffEnv = function({ dev = '', prod = '' }) {
    const path = isProd ? prod : dev
    return  resolve(__dirname, path)
}

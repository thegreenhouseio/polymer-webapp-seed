const commonConfig = require('./webpack.config.common');
// const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(commonConfig, {

  plugins: [
    new WebpackMd5Hash()

    // new UglifyJsPlugin({
    //   beautify: false,
    //   mangle: { screw_ie8: true, keep_fnames: true }, // eslint-disable-line camelcase
    //   compress: { screw_ie8: true }, // eslint-disable-line camelcase
    //   comments: false
    // })

    // new FaviconsWebpackPlugin({
    //   logo: './components/bootstrap/images/favicon.png',
    //   emitStats: true,
    //   prefix: 'icons/',
    //   statsFilename: 'icons/stats.json',
    //   inject: true,
    //   title: 'The Greenhouse',
    //   background: '#efefef',
    //   icons: {
    //     android: true,
    //     appleIcon: true,
    //     appleStartup: true,
    //     coast: false,
    //     favicons: true,
    //     firefox: true,
    //     opengraph: true,
    //     twitter: true,
    //     yandex: true,
    //     windows: true
    //   }
    // }),
  ]

});
const commonConfig = require('./webpack.config.common.js');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(commonConfig, {

  module: {
    rules: [{
      test: /\.(s*)css$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }]
  },

  devServer: {
    port: 4567,
    host: 'localhost',
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }

});
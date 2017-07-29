'use strict';
var path = require('path');
var webpack = require('webpack');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function resolve(filePath) {
  return path.join(__dirname, filePath);
}

module.exports = {
  devtool: 'source-map',
  entry: {
    vendors: ['knockout', 'jquery', 'underscore', 'bootstrap']
  },
  output: {
    path: resolve('./public/javascripts'),
    publicPath: '/public/javascripts',
    filename: '[name].js'
  },
  /*resolve: {
    alias: {
      'jquery-ui': 'jquery-ui-dist/jquery-ui.js'
    }
  },*/
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
    }),
    new BundleAnalyzerPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
};

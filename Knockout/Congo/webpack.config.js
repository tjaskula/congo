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
    vendors: ['./public/javascripts/congo/main.js', 'knockout', 'jquery', 'underscore', 'bootstrap']
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
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
      { test: /\.(woff|woff2)$/, loader: 'url-loader?prefix=font/&limit=5000' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' }
    ]
  },
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

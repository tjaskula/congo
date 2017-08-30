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
    vendors: ['./public/javascripts/congo/main.js', 'knockout', 'underscore', 'bootstrap', 'jquery']
  },
  output: {
    path: resolve('./public'),
    publicPath: '/public',
    filename: 'javascripts/[name].js'
  },
  resolve: {
    alias: {
      //'jquery-ui': 'jquery-ui-dist/jquery-ui.js'
      jquery: 'jquery/src/jquery',
      knockout: 'knockout/build/output/knockout-latest.js'
    }
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?mimetype=application/vnd.ms-fontobject&name=./fonts/[name].[ext]' },
      { test: /\.(woff|woff2)$/, loader: 'url-loader?prefix=font/&limit=5000&name=./fonts/[name].[ext]' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=./fonts/[name].[ext]' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=./fonts/[name].[ext]' }
    ]
  },
  plugins: [
    //new BundleAnalyzerPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      ko: 'knockout'
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
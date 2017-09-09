'use strict';
var path = require('path');
var webpack = require('webpack');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function resolve(filePath) {
  return path.join(__dirname, filePath);
}

var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');

module.exports = {
  devtool: 'eval',
  entry: {
    webpack: [
      // For hot style updates
      'webpack/hot/dev-server',
      // The script refreshing the browser on none hot updates
      'webpack-dev-server/client?http://localhost:8080'],
    vendors: ['./public/javascripts/main.js', 'knockout', 'underscore', 'bootstrap', 'jquery'],
    congo: ['./public/javascripts/congo/index.js',
            './public/javascripts/congo/base.js',
            './public/javascripts/congo/nav.js',
            './public/javascripts/congo/database.js']
  },
  output: {
    path: buildPath,
    publicPath: '/build/',
    filename: '[name].js'
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
      ko: 'knockout',
      _: 'underscore'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
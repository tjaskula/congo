'use strict';
var path = require('path');

function resolve(filePath) {
  return path.join(__dirname, filePath);
}

module.exports = {
  entry: {
    vendors: ['knockout']
  },
  output: {
    path: resolve('./build'),
    publicPath: '/build',
    filename: '[name].js'
  }
};

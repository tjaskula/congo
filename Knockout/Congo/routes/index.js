/*
 * GET home page.
 */
var express = require('express');
var index = express.Router();

index.get('/', function(req, res, next){
  res.render('index', { title: 'Kongo: The Mongo Editor' });
});

module.exports.index = index;
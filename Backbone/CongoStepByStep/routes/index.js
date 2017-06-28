/*
 * GET home page.
 */

var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index', { title: 'Congo: The Mongo Editor' });
});

module.exports = router;
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var errorHandler = require('errorhandler');

var routes = require('./routes');

var app = express();
var router = express.Router();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*app.use(
  app.use(bodyParser()),
  app.use(methodOverride()),
  app.use(app.router),
  app.use(express.static(__dirname + '/public'))
);*/

app.use('development', errorHandler({ dumpExceptions: true, showStack: true }));

app.use('production', errorHandler);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Routes
var congo = require("./lib/congo")(app);
app.get('/', router);
// var listener = app.listen(3000, function(){
//     console.log('Listening on port ' + listener.address().port); //Listening on port 3000
// });

module.exports = app;
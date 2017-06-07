var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var index = require('./routes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  app.set('views', __dirname + '/views'),
  app.set('view engine', 'jade'),
  app.use(bodyParser()),
  app.use(methodOverride()),
  app.use(app.router),
  app.use(express.static(__dirname + '/public'))
);

app.use('development', app.use(express.errorHandler({ dumpExceptions: true, showStack: true })));

app.use('production', app.use(express.errorHandler()));

// Routes
var congo = require("./lib/congo")(app);
app.get('/', routes.index);

app.listen(process.env.port || 3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);

module.exports = app;

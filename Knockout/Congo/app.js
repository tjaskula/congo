'use strict';
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var errorHandler = require('errorhandler');
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer();

var routes = require('./routes');

var app = express();
var router = express.Router();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3001;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(methodOverride());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// We only want to run the workflow when not in production
if (!isProduction) {
  
    // We require the bundler inside the if block because
    // it is only needed in a development environment. Later
    // you will see why this is a good idea
    var bundle = require('./server/bundle.js');
    bundle();
  
    // Any requests to localhost:3000/javascripts is proxied
    // to webpack-dev-server
    app.all('/build/*', function (req, res) {
      proxy.web(req, res, {
          target: 'http://localhost:8080'
      });
    });
  }

// It is important to catch any errors from the proxy or the
// server will crash. An example of this is connecting to the
// server when webpack is bundling
proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
});

app.use('development', errorHandler({ dumpExceptions: true, showStack: true }));
app.use('production', errorHandler);

// Routes
var congo = require('./lib/congo')(app);
app.use('/', routes.index);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// And run the server
app.listen(port, function () {
  console.log('Server running on port ' + port);
});

module.exports = app;

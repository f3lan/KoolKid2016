var config = require('./config');

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');

//var path = require('path');

module.exports = function() {
  var app = express();

  // Test if Env is in development mode
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
    app.locals.pretty = true;
  } else {
    //app.use(compress());
    app.use(morgan('dev'));
    app.locals.pretty = true;
  }

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  // View
  app.set('views', './app/views');
  app.set('view engine', 'jade');

  // Routes
  require('../app/routes/Index.js')(app);

  // Statics
  app.use(express.static('./public'));
  app.use('/assets', express.static('app/assets'));

  return app;
};

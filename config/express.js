var config = require('./config');

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var session = require('client-sessions');

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

  // Session
  app.use(session(config.session));

  // View
  app.set('views', './app/views');
  app.set('view engine', 'ejs'); // jade is weird, => ejs instead

  // Routes
  require('../app/routes/Index.js')(app);
  require('../app/routes/Users.js')(app);

  // Statics
  app.use(express.static('./public'));
  app.use('/assets', express.static('app/assets'));

  return app;
};

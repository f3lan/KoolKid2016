var config = require('./config');

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var session = require('client-sessions');

var rest = require('../app/controllers/RestCtrl.js');
var page = require('../app/controllers/PageCtrl.js');

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
  app.set('view engine', 'ejs'); // jade is weird, => ejs instead

  // Routes
  //require('../app/routes/Index.js')(app);
  // I set stuff here because I'm a peon
  app.use('/', page);
  app.use('/api', rest);

  // Statics
  app.use(express.static('./public'));
  app.use('/assets', express.static('app/assets'));

  // sessions
  app.use(session({
    cookieName: 'session',
    secret: 'My_Little_Poney',
    duration: 30 * 60 * 1000, //defines how long the session will live in milliseconds
    activeDuration: 5 * 60 * 1000, //allows users to lengthen their session by interacting with the site
  }));

  return app;
};





















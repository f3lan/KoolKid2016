var config = require('./config');

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var passport = require('passport');
var session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;
var MongoStore = require('connect-mongo')(session);

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

  app.use(session({
    secret: 'secrettexthere',
    saveUninitialized: true,
    resave: true,
    store: new MongoStore({
      url: config.database.url,
      collection: 'sessions'
    })
  }));

  // Passport
  app.use(passport.initialize());

  var User = require('../app/models/user');
  passport.use(new LocalStrategy(User.authenticate()));
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());

  app.use(passport.session());

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

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

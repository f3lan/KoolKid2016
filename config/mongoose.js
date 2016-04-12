var mongoose = require('mongoose');

var config = require('./config').database;

module.exports = function() {
  var db = mongoose.connect(config.url);

  require('../app/models/user.js');

  return db;
}

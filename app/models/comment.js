var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var Schema = mongoose.Schema;

var Comment = new Schema({
  author: String,
  text: String,
  date: Date,
});

module.exports = mongoose.model('Comment', Comment);

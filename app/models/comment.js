var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var Schema = mongoose.Schema;

var Comment = new Schema({
  author: String,
  text: String,
  date:{
    type: Date,
    default: Date.now
  },
  post : {
    type: Schema.ObjectId,
    ref: 'Post'
  }
});

module.exports = mongoose.model('Comment', Comment);

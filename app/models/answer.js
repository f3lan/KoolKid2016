var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var Schema = mongoose.Schema;

var Answer = new Schema({
  author: String,
  text: String,
  date: Date,
  rating: {
    type: Number,
    default:5
  },
  post : {
    type: Schema.ObjectId,
    ref: 'Post'
  }
});

module.exports = mongoose.model('Answer', Answer);

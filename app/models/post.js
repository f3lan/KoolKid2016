var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var Schema = mongoose.Schema;

var Post = new Schema({
    title:{
      type: String,
      default:'my new medical case'
    },
    author: String,
    content: String,
    category: {
      type:String,
      default:'none'
    },
    status: {
      type:String,
      default:'Open'
    },
    date:{
      type: Date,
      default: Date.now
    },
    hidden: {
      type: Boolean,
      default: true
    },
    comments : [
      {
        type: Schema.ObjectId,
        ref: 'Comment'
      }
    ],
    rating: {
        type: Number,
        default:5
    },
    solved: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Post', Post);

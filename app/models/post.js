var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    title : String,
    category : String,
    image: String,
    question: String,
    name: String,
    rating: {
      type: Number,
      default : 0
    }
});

var Post = mongoose.model('posts', postSchema);

module.exports = Post;

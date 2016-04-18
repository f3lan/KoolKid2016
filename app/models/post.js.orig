var mongoose = require('mongoose');
<<<<<<< HEAD
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
=======
var passportLocalMongoose = require('passport-local-mongoose');

var Schema = mongoose.Schema;

var Post = new Schema({
    title:{ type: String, default:'my new medical case'},
    author: String,
    content: String,
    category:{type:String, default:'none'},
    status:{type:String, default:'Open'},
    date: { type: Date, default: Date.now },
    hidden: { type: Boolean, default: true },
    comments: [{ body: String, author:String, date: Date }]
});

module.exports = mongoose.model('Post', Post);
>>>>>>> develop

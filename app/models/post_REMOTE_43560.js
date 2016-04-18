var mongoose = require('mongoose');
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

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    user: { type: String, required: true , unique: true},
    pwd: { type: String, required: true }
});

var User = mongoose.model('users', userSchema);

module.exports = User;
var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var Schema = mongoose.Schema;

var Expertise = new Schema({
  name: String
});

module.exports = mongoose.model('Expertise', Expertise);

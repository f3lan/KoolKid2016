var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var Schema = mongoose.Schema;

var User = new Schema({
  username: String,
  password: String,
  title: String,
  name: String,
  middlename: String,
  surname: String,
  birthdate: Date,
  practiceinfo: String,
  practicename: String,
  street: String,
  streetno: String,
  postal: String,
  city: String,
  phone: String,
  mobile: String,
  mail: String,
  function: String,
  expertises: [
  {
    type: Schema.ObjectId,
    ref: 'Expertise'
  }]
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);

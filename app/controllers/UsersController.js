'use strict';

const User = require('../models/user');

class UsersController {

  index(req, res) {
    res.header("Content-Type", "application/json; charset=utf-8");

    User.find({}, function(err, users) {
      if (err) {
        throw err;
      } else {
        res.json(users);
      }
    });
  }


  login(req, res) {
    console.log(req.body);
  }

  logout(req, res) {
    console.log(req.body);
  }


  register(req, res, next) {
    const user = new User({
        username: req.body.username,
        name: req.body.name
      });
    const password = req.body.password;
    User.register(user, password, function(error) {
      if(error) {
        console.log(error);
        const message = {error: error};
        res.status(500).json(message);
      } else {
        res.redirect('/');
      }
    });
  }

}

module.exports = new UsersController();

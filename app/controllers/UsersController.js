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


  register(req, res) {
    User.register(new User({
        username: req.body.username
      }),
      req.body.password, function(err, account) {
        if (err) {
          return res.status(500).json({
            err: err
          });
        }
        passport.authenticate('local')(req, res, function() {
          return res.status(200).json({
            status: 'Registration successful!'
          });
        });
      });
  }

}

module.exports = new UsersController();

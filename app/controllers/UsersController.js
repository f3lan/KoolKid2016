'use strict';

let passport = require('passport');

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


  login(req, res, next) {
    passport.authenticate('local', function(error, user, info) {
      if(error) {
        return next(error);
      }

      if(!user) {
        const message = {status: false, message: info};
        res.status(401).json(message);
      }

      req.logIn(user, function(error) {
        if(error) {
          const message = {status: false, message: 'Could not log in.'};
          res.status(500).json(message);
        }
        const message = {status: true, message: 'Login successful.'};
        res.status(200).json(message);
      });

    })(req, res, next);
  }

  logout(req, res) {
    req.logout();
  }

  register(req, res, next) {
    const user = new User({
        username: req.body.username,
        name: req.body.name
      });
    const password = req.body.password;
    User.register(user, password, function(error) {
      if(error) {
        const message = {status: false, message: error};
        res.status(500).json(message);
      } else {
        const message = {status: true, message: 'Registration successful.'};
        res.status(200).json(message);
      }
    });
  }
}

module.exports = new UsersController();

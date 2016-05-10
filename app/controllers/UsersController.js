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
        return res.status(401).json(message);
      }

      req.logIn(user, function(error) {
        if(error) {
          const message = {status: false, message: 'Could not log in.'};
          return res.status(500).json(message);
        }
        const message = {status: true, message: 'Login successful.'};
        res.status(200).json(message);
      });

    })(req, res, next);
  }

  logout(req, res, next) {
    req.logout();
    req.session.destroy(function (error) {
      if (error) {
        return next(error);
      }
      const message = {
        status: req.isAuthenticated()
      };
      return res.status(200).json(message);
    });
  };

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

  getStatus(req, res) {
    const message = {
      status: req.isAuthenticated(),
      user: req.user
    };
    return res.status(200).json(message);
  }

  update(req, res) {
    User.findByIdAndUpdate(req.params.id,
        {$set: req.body},
        function (error, user) {
          if (error) {
            throw error;
          } else {
            res.json(user);
          }
        });
  }

}

module.exports = new UsersController();

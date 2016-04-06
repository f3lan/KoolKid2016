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
    console.log('session:', req.session);

    res.header("Content-Type", "application/json; charset=utf-8");

    var usr = decodeURIComponent(req.params.user);
    var pwd = decodeURIComponent(req.params.pwd);

    User.find({user:usr, pwd:pwd}, function(err, users) {
        if (err) {
            res.json({status:false, err:err});
            throw err;
        }

        var login = users.length > 0 ? true : false;

        if (login > 0) {
          req.session.user = usr;
        }

        res.json({status:true, success:login, err:''});
    });
  }

  logout(req, res) {
    res.header("Content-Type", "application/json; charset=utf-8");
    req.session.reset();
    res.json({status:true});
  }

}

module.exports = new UsersController();

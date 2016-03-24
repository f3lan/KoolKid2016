var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function(req, res, next) {
    res.render('index', { });
}).get('/users', function(req, res, next) {
    res.header("Content-Type", "application/json; charset=utf-8");

    User.find({}, function(err, users) {
        if (err) throw err;

        res.json(users);
    });
}).get('/connect/:user/:pwd', function(req, res, next) {
    res.header("Content-Type", "application/json; charset=utf-8");

    User.find({user:req.params.user, pwd:req.params.pwd}, function(err, users) {
        if (err) throw err;

        var login = users.length > 0 ? true : false;

        res.json({success:login});
    });
});

module.exports = router;

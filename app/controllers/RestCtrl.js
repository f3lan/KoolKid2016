var express = require('express');
var router = express.Router();
var User = require('../models/user');
var session = require('client-sessions');

router.use(session({
    cookieName: 'session',
    secret: 'My_Little_Poney',
    duration: 30 * 60 * 1000, //defines how long the session will live in milliseconds
    activeDuration: 5 * 60 * 1000, //allows users to lengthen their session by interacting with the site
}));


router.get('/', function(req, res, next) {
    res.render('index', { });
}).get('/users', function(req, res, next) {
    res.header("Content-Type", "application/json; charset=utf-8");

    User.find({}, function(err, users) {
        if (err) throw err;

        res.json(users);
    });
}).get('/deco', function(req, res, next) {
    res.header("Content-Type", "application/json; charset=utf-8");

    req.session.user = null;
    res.json({status:true});

}).get('/connect/:user/:pwd', function(req, res, next) {
    res.header("Content-Type", "application/json; charset=utf-8");

    var usr = decodeURIComponent(req.params.user);
    var pwd = decodeURIComponent(req.params.pwd);

    User.find({user:usr, pwd:pwd}, function(err, users) {
        if (err) {
            res.json({status:false, err:err});
            throw err;
        }

        var login = users.length > 0 ? true : false;
        if (login > 0)
            req.session.user = usr;

        res.json({status:true, success:login, err:''});
    });
});

module.exports = router;

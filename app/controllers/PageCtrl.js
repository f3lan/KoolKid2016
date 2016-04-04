var express = require('express');
var router = express.Router();
var session = require('client-sessions');

router.use(session({
    cookieName: 'session',
    secret: 'My_Little_Poney',
    duration: 30 * 60 * 1000, //defines how long the session will live in milliseconds
    activeDuration: 5 * 60 * 1000, //allows users to lengthen their session by interacting with the site
}));

router.get('/', function(req, res, next) {
    res.render('index', { req:req});
});

module.exports = router;

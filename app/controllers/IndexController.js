'use strict';
const Post = require('../models/post');
class IndexController {

  index(req, res) {
    res.render('index', {
      session: req.session
    });
  }

}

module.exports = new IndexController();

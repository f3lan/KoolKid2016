'use strict';

class IndexController {

  index(req, res) {
    res.render('index', {
      title: "Question And Answers for Doctors",
      req:req
    });
  }
}

module.exports = new IndexController();


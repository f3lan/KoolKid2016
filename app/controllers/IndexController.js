'use strict';

class IndexController {

  index(req, res) {
    res.render('index', {
      title: "Question And Answers for Doctors"
    });
  }
}

module.exports = new IndexController();

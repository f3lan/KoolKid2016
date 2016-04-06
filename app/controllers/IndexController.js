'use strict';

class IndexController {

  index(req, res) {
    res.render('index', {
      title: "Question And Answers for Doctors",
      session: req.session
    });
  }
}

module.exports = new IndexController();

'use strict';
let AnswersController = require('./../controllers/AnswersController.js');

class AnswersRoutes {

  constructor(app) {
    this.app = app;
  }

  show() {
    this.app.route('/posts/:id/answers').get(AnswersController.show);
  }

  create() {
    this.app.route('/posts/:id/answers').post(AnswersController.create);
  }


}

module.exports = function(app) {
  const AnswersRoutes = new AnswersRoutes(app);
  AnswersRoutes.show();
  AnswersRoutes.create();
}

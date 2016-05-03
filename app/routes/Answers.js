'use strict';
let AnswersController = require('./../controllers/AnswersController.js');

class AnswersRoutes {

  constructor(app) {
    this.app = app;
  }

  index() {
    this.app.route('/posts/:postId/answers').get(AnswersController.index);
  }

  show() {
    this.app.route('/posts/:postId/answers/:id').get(AnswersController.show);
  }

  create() {
    this.app.route('/posts/:postId/answers').post(AnswersController.create);
  }

  update() {
    this.app.route('/posts/:postId/answers/:id').put(AnswersController.update);
  }

}

module.exports = function(app) {
  const answersRoutes = new AnswersRoutes(app);
  answersRoutes.index();
  answersRoutes.show();
  answersRoutes.create();
  answersRoutes.update();
}

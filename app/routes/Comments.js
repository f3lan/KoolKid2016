'use strict';
let CommentsController = require('./../controllers/CommentsController.js');

class CommentsRoutes {

  constructor(app) {
    this.app = app;
  }

  show() {
    this.app.route('/posts/:id/comments').get(CommentsController.show);
  }

  create() {
    this.app.route('/posts/:id/comments').post(CommentsController.create);
  }


}

module.exports = function(app) {
  const commentsRoutes = new CommentsRoutes(app);
  commentsRoutes.show();
  commentsRoutes.create();
}

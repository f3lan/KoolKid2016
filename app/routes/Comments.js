'use strict';
let CommentsController = require('./../controllers/CommentsController.js');

class CommentsRoutes {

  constructor(app) {
    this.app = app;
  }

  index() {
    this.app.route('/posts/:postId/comments').get(CommentsController.index);
  }

  show() {
    this.app.route('/posts/:postId/comments/:id').get(CommentsController.show);
  }

  create() {
    this.app.route('/posts/:postId/comments').post(CommentsController.create);
  }

  update() {
    this.app.route('/posts/:postId/comments/:id').put(CommentsController.update);
  }

}

module.exports = function(app) {
  const commentsRoutes = new CommentsRoutes(app);
  commentsRoutes.index();
  commentsRoutes.show();
  commentsRoutes.create();
  commentsRoutes.update();
}

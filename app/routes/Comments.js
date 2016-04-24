'use strict';
let CommentsController = require('./../controllers/CommentsController.js');

class CommentsRoutes {

  constructor(app) {
    this.app = app;
  }

  create() {
    this.app.route('/posts/:id/comments').post(CommentsController.create);
  }

}

module.exports = function(app) {
  const commentsRoutes = new CommentsRoutes(app);
  commentsRoutes.create();
}

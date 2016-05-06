'use strict';
let PostsController = require('./../controllers/PostsController.js');

class PostsRoutes {

  constructor(app) {
    this.app = app;
  }

  index() {
    this.app.route('/posts').get(PostsController.index);
  }

  create() {
    this.app.route('/posts').post(PostsController.create);
  }

  show() {
    this.app.route('/posts/:id').get(PostsController.show);
  }

  update() {
    this.app.route('/posts/:id').put(PostsController.update);
  }

  delete() {
    this.app.route('/posts/:id').delete(PostsController.delete);
  }

  upload() {
    this.app.route('/upload/image')
        .post(PostsController.postImage);
  }

}

module.exports = function(app) {
  const postsRoutes = new PostsRoutes(app);

  postsRoutes.index();
  postsRoutes.show();
  postsRoutes.create();
  postsRoutes.update();
  postsRoutes.delete();
}

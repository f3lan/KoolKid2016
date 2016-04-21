'use strict';
let PostController = require('./../controllers/PostController.js');

class PostRoutes {

  constructor(app) {
    this.app = app;
  }

  findAll() {
    this.app.route('/post/findall').get(PostController.findall);
  }

  findByAuthor() {
    this.app.route('/post/findbyauthor/:author').get(PostController.findbyauthor);
  }

  findByID() {
    this.app.route('/post/findbyauthor/:id').get(PostController.findbyid);
  }


  newPost() {
    this.app.route('/post/new/:author').get(PostController.newpost);
  }

  deleteById() {
    this.app.route('/post/deletebyid/:id').get(PostController.deleteById);
  }

}

module.exports = function(app) {
  const postRoutes = new PostRoutes(app);
  postRoutes.findAll();
  postRoutes.newPost();
  postRoutes.findByAuthor();
  postRoutes.deleteById();
  postRoutes.findByID();;
};

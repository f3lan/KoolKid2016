'use strict';
let UsersController = require('./../controllers/UsersController.js');

class UsersRoutes {

  constructor(app) {
    this.app = app;
  }

  index() {
    this.app.route('/users').get(UsersController.index);
  }

  login() {
    this.app.route('/users/login').post(UsersController.login);
  }

  logout() {
    this.app.route('/users/logout').get(UsersController.logout);
  }

  register() {
    this.app.route('/users/register').post(UsersController.register);
  }

  getStatus() {
    this.app.route('/users/status').get(UsersController.getStatus);
  }

  show() {
    this.app.route('/users/:id').get(UsersController.show);
  }

  update() {
    this.app.route('/users/:id').put(UsersController.update);
  }

}

module.exports = function(app) {
  const usersRoutes = new UsersRoutes(app);
  usersRoutes.index();
  usersRoutes.login();
  usersRoutes.logout();
  usersRoutes.register();
  usersRoutes.getStatus();
  usersRoutes.update();
};

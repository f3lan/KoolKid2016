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
    this.app.route('/users/:user/:pwd').get(UsersController.login);
  }

  logout() {
    console.log('logout');
    this.app.route('/logout').get(UsersController.logout);
  }

}

module.exports = function(app) {
  const usersRoutes = new UsersRoutes(app);
  usersRoutes.index();
  usersRoutes.login();
  usersRoutes.logout();
};

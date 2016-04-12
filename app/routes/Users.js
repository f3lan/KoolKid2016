'use strict';
let UsersController = require('./../controllers/UsersController.js');
let passport = require('passport');

class UsersRoutes {

  constructor(app) {
    this.app = app;
  }

  index() {
    this.app.route('/users').get(UsersController.index);
  }

  login() {
    this.app.route('/users/login')
      .post(passport.authenticate('local'), UsersController.login);
  }

  logout() {
    this.app.route('/users/logout').post(UsersController.logout);
  }

  register() {
    this.app.route('/users/register').post(UsersController.register);
  }

}

module.exports = function(app) {
  const usersRoutes = new UsersRoutes(app);
  usersRoutes.index();
  usersRoutes.login();
  usersRoutes.logout();
  usersRoutes.register();
};

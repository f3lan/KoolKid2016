'use strict';

(function() {

  angular.module('MedEx').config(
    [
      '$stateProvider',
      UserRoutes
    ]);

  function UserRoutes(
    $stateProvider
  ) {

    $stateProvider
      .state('app.login', {
        url: 'users/login',
        views: {
          'content@' : {
            templateUrl: 'views/users/login.html',
            controller: 'UsersController',
            controllerAs: 'usersController'
          }
        }
      })
      .state('app.logout', {
        url: 'users/logout',
        views: {
          'content@' : {
            templateUrl: 'views/users/logout.html',
            controller: 'UsersController',
            controllerAs: 'usersController'
          }
        }
      })
      .state('app.register', {
        url: 'users/register',
        views: {
          'content@' : {
            templateUrl: 'views/users/register.html',
            controller: 'UsersController',
            controllerAs: 'usersController'
          }
        }
      })
      .state('app.user', {
        url: 'users/edit',
        views: {
          'content@' : {
            templateUrl: 'views/users/.html',
            controller: 'UsersController',
            controllerAs: 'usersController'
          }
        },
        authorization: true,
        redirectTo: 'app.login',
      });
  }
})();

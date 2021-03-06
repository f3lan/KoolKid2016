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
        url: '/users/login',
        views: {
          'content@' : {
            templateUrl: 'views/users/login.html',
            controller: 'UsersController',
            controllerAs: 'usersController'
          }
        }
      })
      .state('app.logout', {
        url: '/users/logout',
        views: {
          'content@' : {
            templateUrl: 'views/users/logout.html',
            controller: 'UsersController',
            controllerAs: 'usersController'
          }
        }
      })
      .state('app.register', {
        url: '/users/register',
        views: {
          'content@' : {
            templateUrl: 'views/users/register.html',
            controller: 'UsersController',
            controllerAs: 'usersController'
          }
        }
      })
      .state('app.user', {
        url: '/users/:id/edit',
        views: {
          'content@' : {
            templateUrl: 'views/users/edit.html',
            controller: 'UsersController',
            controllerAs: 'usersController'
          }
        },
        authorization: true,
        redirectTo: 'app.login',
      })
      .state('app.users#show', {
        url: '/users/:id',
        views: {
          'content@' : {
            templateUrl: 'views/users/show.html',
            controller: 'UsersController',
            controllerAs: 'usersController'
          },
          'right@': {
            templateUrl: 'views/users/show_right.html',
            controller: 'UsersController',
            controllerAs: 'usersController'
          },
        },
        authorization: true,
        redirectTo: 'app.login',
      })
      .state('app.users#edit', {
        url: '/users/:id/edit',
        views: {
          'content@' : {
            templateUrl: 'views/users/edit.html',
            controller: 'UsersController',
            controllerAs: 'usersController'
          }
        },
        authorization: true,
        redirectTo: 'app.login',
      });
  }
})();

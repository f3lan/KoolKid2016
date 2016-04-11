'use strict';

(function() {

  angular.module('MedEx').config(
    [
      '$stateProvider',
      '$urlRouterProvider',
      UserRoutes
    ]);

  function UserRoutes(
    $stateProvider,
    $urlRouterProvider
  ) {

    $stateProvider
      .state('login', {
        url: '/users/login',
        templateUrl: 'views/users/login.html',
        controller: 'UsersController',
        controllerAs: 'usersController'
      })
      .state('logout', {
        url: '/users/logout',
        templateUrl: 'views/users/logout.html',
        controller: 'UsersController',
        controllerAs: 'usersController'
      })
      .state('register', {
        url: '/users/register',
        templateUrl: 'views/users/register.html',
        controller: 'UsersController',
        controllerAs: 'usersController'
      });
  }
})();
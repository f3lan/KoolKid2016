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

    $urlRouterProvider.otherwise("/users/login");

    $stateProvider
      .state('login', {
        url: '/users/login',
        templateUrl: 'views/users/login.html'
      })
      .state('logout', {
        url: '/users/logout',
        templateUrl: 'views/users/logout.html'
      })
        .state('signup', {
            url: '/users/sign-up',
            templateUrl: 'views/users/signup.html'
        })
         .state('posts', {
        url: '/users/posts',
        templateUrl: 'views/users/posts.html'
    });
  }
})();

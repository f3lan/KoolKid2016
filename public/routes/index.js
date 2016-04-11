'use strict';

(function() {

  angular.module('MedEx').config(
    [
      '$stateProvider',
      '$urlRouterProvider',
      IndexRoutes
    ]);

  function IndexRoutes(
    $stateProvider,
    $urlRouterProvider
  ) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'views/index.html'
      });
  }
})();

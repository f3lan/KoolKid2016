'use strict';

(function() {

  angular.module('MedEx').config(
    [
      '$stateProvider',
      '$urlRouterProvider',
      AppliacationRoutes
    ]);

  function AppliacationRoutes(
    $stateProvider,
    $urlRouterProvider
  ) {

    $stateProvider
      .state('app', {
        url:'/',
        views: {
          'header': {
            templateUrl: 'views/application/header.html',
            controller: 'ApplicationController',
            controllerAs: 'applicationController'
          }
        }
      });
  }
})();

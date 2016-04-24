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
        url: '',
        views: {
          'content@' : {
            templateUrl: 'views/index.html',
          },
          'navigation': {
            templateUrl: 'views/application/navigation.html',
            controller: 'ApplicationController',
            controllerAs: 'applicationController'
          },
          'header': {
            templateUrl: 'views/application/header.html',
            controller: 'ApplicationController',
            controllerAs: 'applicationController'
          },
          'right': {
            templateUrl: 'views/application/right.html',
            controller: 'ApplicationController',
            controllerAs: 'applicationController'
          },
          'footer': {
            templateUrl: 'views/application/footer.html',
            controller: 'ApplicationController',
            controllerAs: 'applicationController'
          }
        }
      });

    $urlRouterProvider.when('', '/index');
  }
})();

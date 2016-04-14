'use strict';

(function() {

  angular.module('MedEx').config(
    [
      '$stateProvider',
      IndexRoutes
    ]);

  function IndexRoutes(
    $stateProvider
  ) {

    $stateProvider
      .state('app.index', {
        url: 'index',
        views: {
          'content@' : {
            templateUrl: 'views/index.html',
          }
        },
        authorization: true,
        redirectTo: 'app.login',
      });
  }
})();

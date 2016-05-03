'use strict';

(function() {

  angular.module('MedEx').config([
    '$stateProvider',
     AnswerRoutes
  ]);

  function AnswerRoutes(
      $stateProvider
  ) {

  $stateProvider
    .state('app.answers#create', {
      url: '/posts/:id/answers/create',
      views: {
        'content@' : {
          templateUrl: 'views/answers/create/create.html',
          controller: 'AnswersController',
          controllerAs: 'answersController'
        }
      }
    })
    .state('app.answers#edit', {
      url: '/posts/:id/answers/:answerId/edit',
      views: {
        'content@' : {
          templateUrl: 'views/answers/edit/edit.html',
          controller: 'AnswersController',
          controllerAs: 'answersController'
        }
      }
    });
  }
})();

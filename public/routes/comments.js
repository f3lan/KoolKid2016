'use strict';

(function() {

    angular.module('MedEx').config( [ 
      '$stateProvider',
       CommentRoutes
    ]);

    function CommentRoutes(
        $stateProvider
    ) {

    $stateProvider
      .state('app.comments#create', {
          url: '/posts/:id/comments/create',
          views: {
              'content@' : {
                  templateUrl: 'views/comments/create/create.html',
                  controller: 'CommentsController',
                  controllerAs: 'commentsController'
              }
          }
      })
      .state('app.comments#edit', {
          url: '/posts/:id/comments/:commentId/edit',
          views: {
              'content@' : {
                  templateUrl: 'views/comments/edit/edit.html',
                  controller: 'CommentsController',
                  controllerAs: 'commentsController'
              }
          }
      });
  }
})();

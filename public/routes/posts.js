'use strict';

(function() {

  angular.module('MedEx').config(
    [
      '$stateProvider',
      PostsRoutes
    ]);

  function PostsRoutes(
    $stateProvider
  ) {

    $stateProvider
      .state('app.posts#index', {
        url: 'posts',
        views: {
          'content@' : {
            templateUrl: 'views/posts/index.html',
            controller: 'PostsController',
            controllerAs: 'postsController'
          }
        }
      })
      .state('app.posts#create', {
        url: 'posts/create',
        views: {
          'content@' : {
            templateUrl: 'views/posts/create.html',
            controller: 'PostsController',
            controllerAs: 'postsController'
          }
        }
      })
      .state('app.posts#show', {
        url: 'posts/:id/',
        views: {
          'content@' : {
            templateUrl: 'views/posts/show.html',
            controller: 'PostsController',
            controllerAs: 'postsController'
          }
        }
      })
      .state('app.posts#edit', {
        url: 'posts/:id/edit',
        views: {
          'content@' : {
            templateUrl: 'views/posts/edit.html',
            controller: 'PostsController',
            controllerAs: 'postsController'
          }
        }
      });
  }
})();

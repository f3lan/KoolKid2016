'use strict';

(function() {

    angular.module('MedEx').config(
        [
            '$stateProvider',
            PostRoutes
        ]);

    function PostRoutes(
        $stateProvider
    ) {

    $stateProvider
      .state('app.posts#index', {
        url: '/posts',
        views: {
          'content@' : {
            templateUrl: 'views/posts/index/index.html',
            controller: 'PostsController',
            controllerAs: 'postsController'
          },
          'right@': {
            templateUrl: 'views/posts/index/right.html',
            controller: 'PostsController',
            controllerAs: 'postsController'
          },
        },
        authorization: true,
        redirectTo: 'app.login',
      })
      .state('app.posts#create', {
        url: '/posts/create',
        views: {
          'content@' : {
            templateUrl: 'views/posts/create/create.html',
            controller: 'PostsController',
            controllerAs: 'postsController'
          }
        },
        authorization: true,
        redirectTo: 'app.login',
      })
      .state('app.posts#show', {
        url: '/posts/:id/',
        views: {
          'content@' : {
            templateUrl: 'views/posts/show/show.html',
            controller: 'PostsController',
            controllerAs: 'postsController'
          },
          'right@': {
              templateUrl: 'views/posts/show/right.html',
              controller: 'PostsController',
              controllerAs: 'postsController'
          },
        },
        authorization: true,
        redirectTo: 'app.login',
      })
      .state('app.posts#createComment', {
          url: '/posts/:id/createComment',
          views: {
              'content@' : {
                  templateUrl: 'views/posts/createComment/createComment.html',
                  controller: 'PostsController',
                  controllerAs: 'postsController'
              }
          },
          authorization: true,
          redirectTo: 'app.login',
      })
        .state('app.posts#createAnswer', {
            url: '/posts/:id/createAnswer',
            views: {
                'content@' : {
                    templateUrl: 'views/posts/createAnswer/createAnswer.html',
                    controller: 'PostsController',
                    controllerAs: 'postsController'
                }
            },
            authorization: true,
            redirectTo: 'app.login',
        })
      .state('app.posts#edit', {
        url: '/posts/:id/edit',
        views: {
          'content@' : {
            templateUrl: 'views/posts/edit/edit.html',
            controller: 'PostsController',
            controllerAs: 'postsController'
          }
        },
        authorization: true,
        redirectTo: 'app.login',
      })
    .state('app.posts#editComment', {
        url: '/posts/:id/editComment',
        views: {
            'content@' : {
                templateUrl: 'views/posts/editComment/editComment.html',
                controller: 'PostsController',
                controllerAs: 'postsController'
            }
        },
        authorization: true,
        redirectTo: 'app.login',
    });
  }
})();

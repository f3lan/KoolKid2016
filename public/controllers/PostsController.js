'use strict';

(function() {

  angular.module('MedEx').controller('PostsController', [
    'ApiService',
    'AuthService',
    '$state',
    '$stateParams',
    PostsController
  ]);

  function PostsController(
    ApiService,
    AuthService,
    $state,
    $stateParams
  ) {

    var getPosts = function() {
      var url = 'posts';
      var that = this;
      ApiService.get(url).then(function(data) {
        that.posts = data;
      });
    }

    var getPost = function() {
      var id = $stateParams.id;
      var url = 'posts/' + id;
      var that = this;
      ApiService.get(url).then(function(data) {
        that.post = data[0];
      });
    }

    var create = function() {
      var url = 'posts';
      var post = this.post;
      post.author = AuthService.getUser().username;

      ApiService.post(url, post).then(function(data) {
        if(data.status) {
          $state.go('app.posts#index');
        }
      });
    }

    return {
      getPosts: getPosts,
      getPost: getPost,
      create: create
    }

  }

})();

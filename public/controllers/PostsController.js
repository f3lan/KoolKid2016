'use strict';

(function() {

  angular.module('MedEx').controller('PostsController', [
    'ApiService',
    'AuthService', '$state',
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

    var createComment = function(comment) {
      var id = $stateParams.id;
      var url = 'posts/' + id + '/comments';
      comment.author = AuthService.getUser().username;

      ApiService.post(url, comment).then(function(data) {
        if(data.status) {
          $state.go('app.posts#show', {id: post._id});
        }
      });
    }

    var edit = function(post) {
      this.post = post;
      $state.go('app.posts#edit', {id: post._id});
    }

    var update = function() {
      var id = $stateParams.id;
      var url = 'posts/' + id;
      var post = this.post;
      post.author = AuthService.getUser().username;

      ApiService.put(url, post).then(function(post) {
        $state.go('app.posts#show', {id: post._id});
      });
    }

    var del = function(post) {
      var url = 'posts/' + post._id;
      ApiService.del(url, post).then(function(data) {
        $state.reload();
      });

    }

    return {
      getPosts: getPosts,
      getPost: getPost,
      create: create,
      createComment: createComment,
      edit, edit,
      update, update,
      del: del
    }

  }

})();

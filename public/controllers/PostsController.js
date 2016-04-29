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

    var getComments = function(post) {
      var id = $stateParams.id;
      var url = 'posts/' + id + '/comments';
      var that = this;
      ApiService.get(url).then(function(data) {
        that.post.comments = data;
      });
    }

    var getAnswers = function(post) {
      var id = $stateParams.id;
      var url = 'posts/' + id + '/answers';
      var that = this;
      ApiService.get(url).then(function(data) {
        that.post.answers = data;
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
      var that = this;
      that.id = id;
      ApiService.post(url, comment).then(function(data) {
        debugger;
        if(data.status) {
          $state.go('app.posts#show', {id: that.id});
        }
      });
    }

    var createAnswer = function(answer) {
      var id = $stateParams.id;
      var url = 'posts/' + id + '/answers';
      answer.author = AuthService.getUser().username;
      var that = this;
      that.id = id;
      ApiService.post(url, answer).then(function(data) {
        debugger;
        if(data.status) {
          $state.go('app.posts#show', {id: that.id});
        }
      });
    }

    var edit = function(post) {
      this.post = post;
      $state.go('app.posts#edit', {id: post._id});
    }

    var editComment = function(post) {
      this.post = post;
      $state.go('app.posts#editComment', {id: post._id});
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


    var updateRating = function(value) {
      this.post.rating += value;
      this.update();
    }

    var markSolved = function(solved) {
      this.post.solved = solved;
      this.update();
    }

    var del = function(post) {
      var url = 'posts/' + post._id;
      ApiService.del(url, post).then(function(data) {
        $state.reload();
      });

    }

    var canEdit = function(post) {
      var username = AuthService.getUser().username;
      return (username === post.author);
    }

    return {
      getPosts: getPosts,
      getPost: getPost,
      create: create,
      createComment: createComment,
      getComments: getComments,
      createAnswer: createAnswer,
      getAnswers: getAnswers,
      updateRating: updateRating,
      markSolved: markSolved,
      edit: edit,
      canEdit: canEdit,
      update: update,
      del: del
    }

  }

})();

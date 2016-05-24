'use strict';

(function() {

  angular.module('MedEx').controller('CommentsController', [
    'ApiService',
    'AuthService',
    '$state',
    '$stateParams',
    CommentsController
  ]);

  function CommentsController(
    ApiService,
    AuthService,
    $state,
    $stateParams
  ) {

    var show = function() {
      var id = $stateParams.id;
      var commentId = $stateParams.commentId;
      var url = 'posts/' + id + '/comments/' + commentId;
      var that = this;
      ApiService.get(url).then(function(data) {
        that.comment = data;
      });
    }

    var create = function() {
      var id = $stateParams.id;
      var commentId = $stateParams.commentId;
      this.comment.author = AuthService.getUser().username;
      var url = 'posts/' + id + '/comments';
      ApiService.post(url, this.comment).then(function(data) {
        if(data.status) {
          $state.go('app.posts#show', {id: id});
        }
      });
    }

    var update = function() {
      var id = $stateParams.id;
      var commentId = $stateParams.commentId;
      var url = 'posts/' + id + '/comments/' + commentId;
      ApiService.put(url, this.comment).then(function(data) {
        if(data.status) {
          $state.go('app.posts#show', {id: id});
        }
      });
    }

    var canEdit = function (comment) {
      var user = AuthService.getUser();
      if (!comment) {
        return false;
      } else if (!user) {
        return false;
      } else {
        return (user.username === comment.author);
      }
    }

    return {
      show,
      create,
      update,
      canEdit
    }

  }

})();

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

    var index = function() {
      var url = 'posts';
      var that = this;
      ApiService.get(url).then(function(data) {
        that.posts = data;
      });
    }

    var show = function() {
      var id = $stateParams.id;
      var url = 'posts/' + id;
      var that = this;
      ApiService.get(url).then(function(data) {
        that.post = data[0];
        comments(that.post);
        answers(that.post);
      });
    }

    var create = function() {
      var url = 'posts';
      var post = this.post;
      that.post.author = AuthService.getUser().username;

      ApiService.post(url, that.post).then(function(data) {
        if(data.status) {
          $state.go('app.posts#index');
        }
      });
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

    var edit = function(post) {
      this.post = post;
      $state.go('app.posts#edit', {id: post._id});
    }

    var del = function(post) {
      var url = 'posts/' + post._id;
      ApiService.del(url, post).then(function(data) {
        $state.reload();
      });
    }

    var comments = function(post) {
      var id = $stateParams.id;
      var url = 'posts/' + id + '/comments';
      ApiService.get(url).then(function(data) {
        post.comments = data;
      });
    }

    var answers = function(post) {
      var id = $stateParams.id;
      var url = 'posts/' + id + '/answers';
      var that = this;
      ApiService.get(url).then(function(data) {
        post.answers = data;
      });
    }

    var rate = function(value) {
      this.post.rating += value;
      this.update();
    }

    var solve = function(value) {
      this.post.solved = value;
      this.update();
    }

    var canEdit = function(post) {
      var user = AuthService.getUser();
      if(!post) {
        return false;
      } else if(!user) {
        return false;
      } else {
        return (user.username === post.author);
      }
    }

    //http://stackoverflow.com/questions/25019134/how-to-upload-an-image-file-to-mongoose-database-using-mean-js
    var onFileSelect = function(image) {
      if (angular.isArray(image)) {
        image = image[0];
      }

      // This is how I handle file types in client side
      if (image.type !== 'image/png' && image.type !== 'image/jpeg') {
        alert('Only PNG and JPEG are accepted.');
        return;
      }

      var uploadInProgress = true;
      var uploadProgress = 0;

      $scope.upload = $upload.upload({
        url: '/upload/image',
        method: 'POST',
        file: image
      }).progress(function(event) {
        uploadProgress = Math.floor(event.loaded / event.total);
        $scope.$apply();
      }).success(function(data, status, headers, config) {
        uploadInProgress = false;
        // If you need uploaded file immediately
        $scope.uploadedImage = JSON.parse(data);
      }).error(function(err) {
        uploadInProgress = false;
        console.log('Error uploading file: ' + err.message || err);
      });
    };

    return {
      index,
      show,
      create,
      edit,
      update,
      del,
      solve,
      rate,
      canEdit,
      onFileSelect
    }
  }

})();

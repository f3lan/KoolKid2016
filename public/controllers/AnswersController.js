'use strict';

(function() {

  angular.module('MedEx').controller('AnswersController', [
    'ApiService',
    'AuthService',
    '$state',
    '$stateParams',
    AnswersController
  ]);

  function AnswersController(
    ApiService,
    AuthService,
    $state,
    $stateParams
  ) {

    var show = function() {
      var id = $stateParams.id;
      var answerId = $stateParams.answerId;
      var url = 'posts/' + id + '/answers/' + answerId;
      var that = this;
      ApiService.get(url).then(function(data) {
        that.answer = data;
      });
    }

    var create = function() {
      var id = $stateParams.id;
      this.answer.author = AuthService.getUser().username;
      var url = 'posts/' + id + '/answers';
      ApiService.post(url, this.answer).then(function(data) {
        if(data.status) {
          $state.go('app.posts#show', {id: id});
        }
      });
    }

    var update = function() {
      var id = $stateParams.id;
      var answerId = $stateParams.answerId;
      var url = 'posts/' + id + '/answers/' + answerId;
      ApiService.put(url, this.answer).then(function(data) {
        if(data.status) {
          $state.go('app.posts#show', {id: id});
        }
      });
    }

    return {
      show,
      create,
      update
    }

  }

})();

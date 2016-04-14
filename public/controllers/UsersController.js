'use strict';

(function() {

  angular.module('MedEx').controller('UsersController', [
    '$scope',
    '$state',
    'AuthService',
    UsersController
  ]);

  function UsersController(
    $scope,
    $state,
    AuthService
  ) {

    this.login = function(user) {
      const that = this;
      AuthService.login(user).then(function(data) {
        if(data.status) {
          AuthService.setUser(true);
          $state.go('app.index');
          that.result = "Login successful";
        } else {
          that.result = "Login not successful";
        }
      });
    }

    this.logout = function() {
      AuthService.logout();
      $state.go('app.login');
    }

    this.cancel = function() {
      $state.go('app.index');
    }

    this.register = function(user) {
      AuthService.register(user).then(function() {
        $state.go('app.index');
      });
    }
  }

})();

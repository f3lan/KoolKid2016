'use strict';

(function() {

  angular.module('MedEx').controller('UsersController', [
    '$scope',
    'AuthService',
    UsersController
  ]);

  function UsersController(
    $scope,
    AuthService
  ) {

    this.login = function(user) {
      this.result = AuthService.login(user);
    }

    this.logout = function(user) {
      AuthService.logout(user);
    }

    this.register = function(user) {
      AuthService.register(user);
    }
  }

})();

'use strict';

(function() {

  angular.module('MedEx').controller('UsersController', [
    '$scope',
    'UserService',
    UsersController
  ]);

  function UsersController(
    $scope,
    UserService
  ) {

    var that = this;

    this.login = function() {
      UserService.login();
    }

  }

})();

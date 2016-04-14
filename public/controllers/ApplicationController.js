'use strict';

(function() {

  angular.module('MedEx').controller('ApplicationController', [
    '$scope',
    'AuthService',
    ApplicationController
  ]);

  function ApplicationController(
    $scope,
    AuthService
  ) {

    var that = this;

    var getUser = function() {
      if(AuthService.isLoggedIn()) {
        return AuthService.getUser();
      } else {
        return false;
      }
    }

    var isLoggedIn = function() {
      return AuthService.isLoggedIn();
    }

    return {
      getUser: getUser,
      isLoggedIn: isLoggedIn
    }

  }

})();

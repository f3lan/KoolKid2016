'use strict';

(function() {
  angular.module('MedEx').factory('AuthService', [
    'ApiService',
    AuthService
  ]);

  function AuthService(
    ApiService
  ) {

    var that = this;

    var getStatus = function() {
      var url = 'users/status';
      ApiService.get(url).then(function(data) {
        that.user = data.status;
      });
    }

    // check the current state
    getStatus();

    var login = function(user) {
      var url = 'users/login';
      return ApiService.post(url, user);
    }

    var logout = function(user) {
      var url = 'users/logout';
      return ApiService.post(url, user);
    }

    var register = function(user) {
      var url = 'users/register';
      return ApiService.post(url, user);
    }

    var isLoggedIn = function() {
      return that.user;
    }

    var getUser = function() {
      return user;
    }

    var setUser = function(user) {
      that.user = user;
    }

    return {
      login: login,
      logout: logout,
      register: register,
      isLoggedIn: isLoggedIn,
      getUser: getUser,
      setUser: setUser,
      getStatus: getStatus
    };
  }

})();

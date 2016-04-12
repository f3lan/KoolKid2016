'use strict';

(function() {
  angular.module('MedEx').factory('AuthService', [
    'ApiService',
    AuthService
  ]);

  function AuthService(
    ApiService
  ) {

    var user = null;

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
      if(user) {
        return true;
      } else {
        return false;
      }
    }

    var getUser = function() {
      return user;
    }

    return {
      login: login,
      logout: logout,
      register: register,
      isLoggedIn: isLoggedIn,
      getUser: getUser
    };
  }

})();

'use strict';

(function() {
  angular.module('MedEx').factory('AuthService', [
    'ApiService',
    AuthService
  ]);

  function AuthService(
    ApiService
  ) {

    return {

      login: function(user) {
        var url = 'users/login';
        return ApiService.post(url, user);
      },

      logout: function(user) {
        var url = 'users/logout';
        return ApiService.post(url, user);
      },

      register: function(user) {
        var url = 'users/register';
        return ApiService.post(url, user);
      }
    }
  }

})();

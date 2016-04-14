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
        that.loggedIn = data.status;
        if(data.status) {
          that.user = data.user;
        }
      });
    }

    // check the current state
    getStatus();

    var login = function(user) {
      var url = 'users/login';
      return ApiService.post(url, user);
    }

    var logout = function() {
      var url = 'users/logout';
      ApiService.get(url).then(function() {
        getStatus();
      });
    }

    var register = function(user) {
      var url = 'users/register';
      return ApiService.post(url, user);
    }

    var isLoggedIn = function() {
      return that.loggedIn;
    }

    var getUser = function() {
      return that.user;
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

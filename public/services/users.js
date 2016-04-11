'use strict';

(function() {
  angular.module('MedEx').service('UserService', [
    UserService
  ]);

  function UserService(
  ) {

    var login = function() {
      console.log("login");
    }

    var logout = function() {

    }
    
    var signup = function() {

    }

    return {

      login : function() {
        return login();
      },

      logout : function() {
        return logout();
      },

      signup : function() {
        return signup();
      }

    }

  }

})();

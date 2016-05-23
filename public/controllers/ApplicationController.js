'use strict';

(function() {

  angular.module('MedEx').controller('ApplicationController', [
    'AuthService',
    'LanguageService',
    ApplicationController
  ]);

  function ApplicationController(
    AuthService,
    LanguageService
  ) {

    var getUser = function() {
      if(AuthService.isLoggedIn()) {
        return AuthService.getUser();
      } else {
        return false;
      }
    };

    var isLoggedIn = function() {
      return AuthService.isLoggedIn();
    };

    var setLanguage = function(lang) {
      LanguageService.setLanguage(lang)
    };

    var currentLanguage = function() {
      return LanguageService.currentLanguage();
    };

    return {
      getUser: getUser,
      isLoggedIn: isLoggedIn,
      language: currentLanguage,
      setLanguage: setLanguage,
      languages: LanguageService.availableLanguages()
    }

  }

})();

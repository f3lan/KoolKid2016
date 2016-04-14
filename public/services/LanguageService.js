'use strict';

(function() {
  angular.module('MedEx').service('LanguageService', [
    '$translate',
    LanguageService
  ]);

  function LanguageService(
    $translate
  ) {

    var LANGUAGES = ['EN', 'DE', 'FR', 'IT', 'RM']

    var availableLanguages = function() {
      return LANGUAGES;
    }

    var setLanguage = function(lang) {
      $translate.use(lang);
    }

    var currentLanguage = function() {
      return $translate.use().toUpperCase();
    }

    return {
      availableLanguages: availableLanguages,
      setLanguage: setLanguage,
      currentLanguage: currentLanguage
    };
  }

})();

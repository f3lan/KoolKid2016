'use strict';
(
  function() {

    var AppName = 'MedEx';

    var app = angular.module(AppName, [
        'ui.router',
        'pascalprecht.translate',
        'ngCookies',
        'MedEx.config'
      ]);

    app.config([
      '$translateProvider',

      function($translateProvider) {
        $translateProvider.useStaticFilesLoader({
          prefix: '/assets/i18n/',
          suffix: '.json'
        });

        $translateProvider.registerAvailableLanguageKeys(
          ['en', 'de', 'fr', 'it', 'rm'],{
           'en_*': 'en',
           'de_*': 'de',
           'fr_*': 'fr',
           'it_*': 'it',
           'rm_*': 'rm',
           '*': 'en'
          }
        );

        $translateProvider.fallbackLanguage('en');
        $translateProvider.useSanitizeValueStrategy('escape');
        $translateProvider.determinePreferredLanguage();
        $translateProvider.useLocalStorage();
      }
    ]);

    app.run(function($rootScope, $state, AuthService) {
      $rootScope.$on(
        '$stateChangeSuccess',
        function(event, toState, toParams, fromState, fromParams) {
          AuthService.getStatus();

          if (!AuthService.isLoggedIn() &&
              toState.authorization &&
              toState.redirectTo) {
            $state.go(toState.redirectTo);
          }
      });
    });

  }
)();

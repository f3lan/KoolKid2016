'use strict';
(
  function() {

    var AppName = 'MedEx';

    var app = angular.module(AppName, [
        'ngMaterial',
        'ui.router',
        'pascalprecht.translate',
        'ngCookies',
        'MedEx.config',
        'ngFileUpload'
      ]);

    app.config([
      '$translateProvider',

      function($translateProvider) {
        $translateProvider.useStaticFilesLoader({
          prefix: '/assets/i18n/',
          suffix: '.json'
        });

        $translateProvider.registerAvailableLanguageKeys(
          ['EN', 'DE', 'FR', 'IT', 'RM'],{
           'EN_*': 'EN',
           'DE_*': 'DE',
           'FR_*': 'FR',
           'IT_*': 'IT',
           'RM_*': 'RM',
           '*': 'EN'
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

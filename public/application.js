'use strict';
(
  function() {

    var AppName = 'MedEx';
    var app = angular.module(AppName, [
        'ui.router',
        'MedEx.config'
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

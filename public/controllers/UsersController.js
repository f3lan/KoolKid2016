'use strict';

(function () {

    angular.module('MedEx').controller('UsersController', [
        '$scope',
        '$state',
        '$stateParams',
        'AuthService',
        'ApiService',
        'Expertises',
        UsersController
    ]);

    function UsersController($scope,
                             $state,
                             $stateParams,
                             AuthService,
                             ApiService,
                             Expertises) {

        var expertises = Expertises.all();

        this.loginButton = true;
        
        this.login = function (user) {
            const that = this;
            
            this.loginButton = false;
            
            AuthService.login(user).then(function (data) {
                if (data.status) {
                    AuthService.setUser(true);
                    $state.go('app.posts#index');
                } else {
                    that.result = "Login not successful";
                }
            });
        };

        this.logout = function () {
            AuthService.logout();
            $state.go('app.login');
        };

        this.cancel = function () {
            $state.go('app');
        };

        this.register = function (user) {
            AuthService.register(user).then(function () {
                $state.go('app');
            });
        };

        this.show = function () {
            const that = this;
            that.user = AuthService.getUser();
        };

        this.update = function () {
            var id = $stateParams.id;
            var url = 'users/' + id;
            ApiService.put(url, this.user).then(function (data) {
                if (data.status) {
                    $state.go('app.posts#index');
                }
            });
        };
        
        this.items = expertises;


        this.transformChip = function(chip) {
            return true;
        };


    }

})();

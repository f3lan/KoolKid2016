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
                             Expertises
    ) {

        this.login = function (user) {
            const that = this;
            AuthService.login(user).then(function (data) {
                if (data.status) {
                    AuthService.setUser(true);
                    $state.go('app.posts#index');
                    that.result = "Login successful";
                } else {
                    that.result = "Login not successful";
                }
            });
        }

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
        
        
        return {
            expertises: Expertises.all()
        }

    }

})();

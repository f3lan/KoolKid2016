'use strict';

(function() {

    angular.module('MedEx').controller('PostController', [
        '$scope',
        '$state',
        'ApiService',
        'AuthService',
        '$timeout',
        PostController
    ]);

    function PostController(
        $scope,
        $state,
        ApiService,
        AuthService,
        $timeout
    ) {

        $scope.posts = [];

        ApiService.get('post/findbyauthor/' + AuthService.getUser().username).then(function(data) {
            $scope.posts = data;
        });


        this.newPost = function() {
            ApiService.get('post/new/' + AuthService.getUser().username).then(function(data) {

                // The view does not update when the new values comes from a service.
                ApiService.get('post/findbyauthor/' + AuthService.getUser().username).then(function(data) {
                    $scope.posts = data;
                    $timeout(function(){
                        $scope.$apply();
                    });
                });
            });

        }

        this.delete = function(id) {
            // The view does not update when the new values comes from a service.
            ApiService.get('post/deletebyid/' + id).then(function(data) {
                $scope.posts = data;
                $timeout(function(){
                    $scope.$apply();
                });
            });


        }






    }

})();

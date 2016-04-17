'use strict';

(function() {

    angular.module('MedEx').config(
        [
            '$stateProvider',
            PostRoutes
        ]);

    function PostRoutes(
        $stateProvider
    ) {

        $stateProvider
            .state('app.MyPosts', {
                url: 'myposts',
                views: {
                    'content@' : {
                        templateUrl: 'views/posts/mypostlist.html',
                        controller: 'PostController',
                        controllerAs: 'postController'
                    }
                }
            }).state('app.MyPostsDetails', {
            url: 'myposts/:id',
            views: {
                'content@' : {
                    templateUrl: 'views/posts/mypostdetails.html',
                    controller: 'PostDetailController',
                    controllerAs: 'postDetailController'
                }
            }
        });
    }
})();

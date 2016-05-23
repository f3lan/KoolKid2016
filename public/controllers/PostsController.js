'use strict';

(function () {

    angular.module('MedEx').controller('PostsController', [
        'ApiService',
        'AuthService',
        '$state',
        '$stateParams',
        'Upload',
        PostsController
    ]);

    function PostsController(ApiService,
                             AuthService,
                             $state,
                             $stateParams,
                             Upload) {

        var index = function () {
            var url = 'posts';
            var that = this;
            ApiService.get(url).then(function (data) {
                that.posts = data;
            });
        };

        var show = function () {
            var id = $stateParams.id;
            var url = 'posts/' + id;
            var that = this;
            ApiService.get(url).then(function (data) {
                that.post = data[0];
                comments(that.post);
                answers(that.post);
            });
        };

        var create = function () {
            var that = this;
            var url = 'posts';
            that.post.author = AuthService.getUser().username;

            ApiService.post(url, that.post).then(function (data) {
                if (data.status) {
                    if(that.post.file) {
                        upload(data.post, that.post.file)
                    }
                    $state.go('app.posts#index');
                }
            });
            
        };

        var update = function () {
            var id = $stateParams.id;
            var url = 'posts/' + id;
            var post = this.post;
            post.author = AuthService.getUser().username;

            ApiService.put(url, post).then(function (post) {
                $state.go('app.posts#show', {id: post._id});
            });
        };

        var edit = function (post) {
            this.post = post;
            $state.go('app.posts#edit', {id: post._id});
        };

        var del = function (post) {
            var url = 'posts/' + post._id;
            ApiService.del(url, post).then(function (data) {
                $state.reload();
            });
        };

        var comments = function (post) {
            var id = $stateParams.id;
            var url = 'posts/' + id + '/comments';
            ApiService.get(url).then(function (data) {
                post.comments = data;
            });
        };

        var answers = function (post) {
            var id = $stateParams.id;
            var url = 'posts/' + id + '/answers';
            var that = this;
            ApiService.get(url).then(function (data) {
                post.answers = data;
            });
        };

        var rate = function (value) {
            this.post.rating += value;
            this.update();
        };

        var rateAnswer = function (answer, value) {
            answer.rating += value;
            this.update();
        };

        var solve = function (value) {
            this.post.solved = value;
            this.update();
        };

        var canEdit = function (post) {
            var user = AuthService.getUser();
            if (!post) {
                return false;
            } else if (!user) {
                return false;
            } else {
                return (user.username === post.author);
            }
        };

        var upload = function (post, file) {
            var url = 'posts/' + post._id + '/upload';
            Upload.upload({
                url: url,
                data: {file: file}
            }).then(function (res) {
                console.log('Success ' + res.config.data.file.name +
                    'uploaded. Response: ' +
                    res.data);
            }, function (res) {
                console.log('Error status: ' + res.status);
            }, function (evt) {
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
            });
        };
        
        return {
            index: index,
            show: show,
            create: create,
            edit: edit,
            update: update,
            del: del,
            solve: solve,
            rate: rate,
            canEdit: canEdit,
            rateAnswer: rateAnswer
        }
    }

})
();

'use strict';

(function () {

    angular.module('MedEx').directive('expertises', [
        'Expertises',
        ExpretisesDirective
    ]);

    function ExpretisesDirective(
        Expertises
    ) {

        var templateUrl = 'directives/views/expertises.html';
        
        var load = function(scope) {
            scope.items = Expertises.all();
            
        };

        var search = function(term) {
            if(term) {
                this.items = _.filter(this.items, function(item) {
                    var _item = item.toLowerCase();
                    var _term = term.toLowerCase();
                    return (_.includes(_item, _term));
                });
            } else {
                console.log('loaded')
                load(this);
            }
        };
        
        var link = function($scope) {
            load($scope);
            $scope.search = search;
            $scope.model = $scope.model || [];
        };

        return {
            scope: {
                model: '='
            },
            templateUrl: templateUrl,
            restricted: 'E',
            link: link
        }
    };

})();

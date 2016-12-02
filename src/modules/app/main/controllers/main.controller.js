'use strict';

module.exports = /*@ngInject*/
    function mainController($scope, imagesService) {
        $scope.error = false;
        $scope.images = null;
        $scope.limit = 20;
        imagesService.getImages().then(function (r) {
            $scope.error = r.error;
            $scope.images = r.data;
        });

        $scope.loadMore = function () {
            $scope.limit += 10;
        };
    };
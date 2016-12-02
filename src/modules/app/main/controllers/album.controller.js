'use strict';

module.exports = /*@ngInject*/
    function albumController($scope, $routeParams, imagesService) {
        $scope.albumId = $routeParams.albumId;
        $scope.album = null;
        $scope.limit = 20;

        imagesService.getAlbumImages($scope.albumId).then(function (r) {
            $scope.error = r.error;
            $scope.album = r.data;
        });

        $scope.loadMore = function () {
                $scope.limit += 10;
        };
    };
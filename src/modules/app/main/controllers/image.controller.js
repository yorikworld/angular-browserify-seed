'use strict';

module.exports = /*@ngInject*/
    function imageController($scope, $routeParams, imagesService) {
        $scope.imageId = $routeParams.imageId;
        $scope.album = null;

        imagesService.getSingleImage($scope.imageId).then(function (r) {
            $scope.error = r.error;
            $scope.image = r.data;
        });
    };
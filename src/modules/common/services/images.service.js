'use strict';

module.exports = /*@ngInject*/
    function imagesService($rootScope, $http) {
        var myCatch = function (error) {
            error.statusText = 'Error processing';
            return {data: false, error: error};
        };
        var reqError = function (error) {
            return {data: false, error: error};
        };

        var myImages = {
            getImages: function () {
                var promise = $http.get('http://jsonplaceholder.typicode.com/photos').then(function (response) {
                    return {data: response.data, error: false};
                }, reqError).catch(myCatch);
                return promise;
            },
            getAlbumImages: function (albumId) {
                var promise = $http.get('http://jsonplaceholder.typicode.com/albums/' + albumId + '/photos').then(function (response) {
                    return {data: response.data, error: false};
                }, reqError).catch(myCatch);
                return promise;
            },
            getSingleImage: function (imageId) {
                var promise = $http.get('http://jsonplaceholder.typicode.com/photos/' + imageId).then(function (response) {
                    return {data: response.data, error: false};
                }, reqError).catch(myCatch);
                return promise;
            }
        };

        return myImages;
    };

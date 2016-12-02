'use strict';

module.exports = /*ngInject*/
    function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {
                templateUrl: 'app/main/templates/main.html',
                controller: 'mainController'
            })
            .when('/album/:albumId', {
                templateUrl: 'app/main/templates/album.html',
                controller: 'albumController'
            })
            .when('/image/:imageId', {
                templateUrl: 'app/main/templates/image.html',
                controller: 'imageController'
            })
            .otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(true);
    };
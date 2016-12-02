'use strict';

module.exports =
    angular.module('expressly.common.services', [])
        .factory('imagesService', require('./images.service'));

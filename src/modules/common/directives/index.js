'use strict';

module.exports =
    angular.module('expressly.common.directives', [])
        .directive('errorDirective', require('./error.directive'));

'use strict';

module.exports = /*@ngInject*/
    function errorDirective() {
        return {
            restrict: 'A',
            scope: {
                error: ' = error'
            },
            templateUrl: 'common/directives/error.html',
            replace: true
        };
    };

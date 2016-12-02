'use strict';

module.exports =
    angular.module('expressly', [
        'ngRoute',
        'ngAnimate',
        'ngAria',
        'ngMaterial',
        'pascalprecht.translate',
        'infinite-scroll',

        // html templates in $templateCache
        require('../../../tmp/templates').name,

        // common directives, filters, services
        require('../common').name,

        // modules
        require('./main').name
    ])
        .config(/*@ngInject*/ function ($translateProvider) {
            $translateProvider.preferredLanguage('en');
        });

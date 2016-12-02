'use strict';

module.exports =
    angular.module('expressly.app', [])
        .config(require('./routes.js'))
        .config(require('./i18n/en.js'))
        .controller('mainController', require('./controllers/main.controller'))
        .controller('albumController', require('./controllers/album.controller'))
        .controller('imageController', require('./controllers/image.controller'));
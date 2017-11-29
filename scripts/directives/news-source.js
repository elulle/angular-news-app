'use strict';
angular.module('newsApp')
.directive('sourcefeed', function() {
    return {
        templateUrl: 'templates/source-feed.html',
        controller: 'sourceCtrl'
    };
});
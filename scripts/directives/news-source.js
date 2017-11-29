'use strict';
angular.module('newsApp')
.directive('sourcefeed', function() {
    return {
        templateUrl: 'templates/source-feed.html',
        controller: 'sourceCtrl'
    };
})

.directive('articlefeed', function() {
    return {
        templateUrl: 'templates/article-feed.html',
        controller: 'articleCtrl',
         link: function($scope, element, attrs) {
            $scope.viewArticles= function(source) {
                $scope.showArticleDirc = true;
                $scope.getArticles(source);
            }
        }
    };
});
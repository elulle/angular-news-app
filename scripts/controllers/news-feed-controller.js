'use strict';
angular.module('newsApp')
.controller('sourceCtrl', function($scope, newsDataService) {
    newsDataService.getSource(function(response){
        $scope.newsSource = response.data.sources;
    });
})
.controller('articleCtrl', function($scope, articleService){
    $scope.showArticleDirc=false;
    $scope.getArticles = function(source) {
        articleService.getArticles(function(response){
            $scope.newsArticles = response.data.articles;
        }, source)
    };
})
'use strict';
angular.module('newsApp')
.controller('sourceCtrl', function($scope, newsDataService) {
    newsDataService.getSource(function(response){
        var allSources = response.data.sources,
            size = 3;
        $scope.newsSourceList = [];
        while (allSources.length > 0)
            $scope.newsSourceList.push(allSources.splice(0, size));
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
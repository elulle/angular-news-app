'use strict';
angular.module('newsApp')
.controller('sourceCtrl', function($scope, newsDataService) {
    newsDataService.getSource(function(response){
        var allSources = response.data.sources,
            size = 3;
        $scope.newsSourceList = [];
        while (allSources.length > 0)
            $scope.newsSourceList.push(allSources.splice(0, size));
        console.log($scope.newsSourceList);
    });

     $scope.getArticles = function(source) {
        newsDataService.getArticles(function(response){
            $scope.newsArticles = response.data.articles;
            console.log($scope.newsArticles);
        }, source)
    };
})
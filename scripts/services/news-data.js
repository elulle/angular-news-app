angular.module("newsApp")
.service('newsDataService', function($http) {
    this.getSource = function(callback) {
        $http.get('https://newsapi.org/v2/sources?apiKey=69a195d0b82c429cade9dd5394901257')
        .then(callback);
    };

    this.getArticles = function(callback, sourceId) {
        $http.get('https://newsapi.org/v2/top-headlines?sources=' + sourceId + '&apiKey=69a195d0b82c429cade9dd5394901257')
        .then(callback);
    };
});
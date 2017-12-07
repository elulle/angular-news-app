'use strict';
angular.module('newsApp')
.controller('sourceCtrl', function($scope, newsDataService) {
    newsDataService.getSource(function(response){
        $scope.newsSource = response.data.sources;
    });

    //gets a list of all categories 
    $scope.getCategory = function() {
        if(!$scope.categories) {
            var result = $scope.newsSource.map(a => a.category);
            $scope.categories = result.filter(function(item, pos) {
                return result.indexOf(item) == pos;
            });
            $scope.categories.push('');
        };
    };

    //gets a list of all categories 
    $scope.getCountries = function() {
        if(!$scope.countries) {
            var result = $scope.newsSource.map(a => a.country);
            var countryCodes = result.filter(function(item, pos) {
                return result.indexOf(item) == pos;
            });
            $scope.countries = countryCodes;
            // var finalCountries = [],
            // countryName = '';
            // countryCodes.forEach(function(element) {
            //     countryName = $scope.getCountryName(element);
            //     finalCountries.push({
            //         name: 'france',
            //         code: 'fr'
            //     });
            // });
            // $scope.countries = finalCountries;
        };
    };

    // $scope.getCountryName = function(countryCode) {
    //     var countryName;
    //     newsDataService.getCountryNameService(function(response){
    //         $scope.countryName = response.data.name;
    //     }, countryCode);
    // };
})

.controller('articleCtrl', function($scope, articleService){
    $scope.showArticleDirc=false;
    $scope.getArticles = function(source) {
        articleService.getArticles(function(response){
            $scope.newsArticles = response.data.articles;
        }, source)
    };
})

// .controller('countryCtrl', function($scope, newsDataService) {
//      $scope.getCountryName = function(countryCode) {
//         countryCode.getCountryName(function(response){
//             $scope.countryName = response.data.name;
//         }, countryCode);
//         console.log( $scope.countryName);
//     };
// })
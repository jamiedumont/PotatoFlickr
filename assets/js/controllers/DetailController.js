angular.module('PotatoFlickr')
.controller('DetailController', ['$scope', 'FlickrApi', '$routeParams', '$sce', function($scope, FlickrApi, $routeParams, $sce) {
    FlickrApi.then(function(data) {
      $scope.image = data[$routeParams.id];
    });
}]);
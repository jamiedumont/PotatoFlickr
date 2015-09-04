angular.module('PotatoFlickr')
.controller('MainController', ['$scope', 'FlickrApi', function ($scope, FlickrApi) {
  FlickrApi.then(function(data) {
      $scope.images = data;
    });
  }]);
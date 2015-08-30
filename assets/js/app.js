var angular = require('angular');

angular.module('PotatoFlickr', [require('angular-route'), require('angular-sanitize')])
	.config(function ($routeProvider) {
	    $routeProvider
	      .when ('/', {
	        controller: 'MainController',
	        templateUrl: 'views/list.html'
	      })
	      .when ('/images/:id', {
	        controller: 'DetailController',
	        templateUrl: 'views/detail.html'
	      })
	      .otherwise ({
	        redirectTo: '/'
	      });
	})
	.controller('MainController', ['$scope', 'FlickrApi', function ($scope, FlickrApi) {
  FlickrApi.then(function(data) {
      $scope.images = data;
    });
  }])

	.controller('DetailController', ['$scope', 'FlickrApi', '$routeParams', '$sce', function($scope, FlickrApi, $routeParams, $sce) {
    FlickrApi.then(function(data) {
      $scope.image = data[$routeParams.id];
    });
}])

	.factory('FlickrApi', ['$http', '$q', function ($http, $q) {
	    var defer = $q.defer();
	
	    $http.jsonp('https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK')
	      .then(function(result) {
	        defer.resolve(result.data.items);
	      });
	
	    return defer.promise;
	}]);



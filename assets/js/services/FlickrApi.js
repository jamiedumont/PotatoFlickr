angular.module('PotatoFlickr')
.factory('FlickrApi', ['$http', '$q', function ($http, $q) {
	    var defer = $q.defer();
	
	    $http.jsonp('https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK')
	      .then(function(result) {
	        defer.resolve(result.data.items);
	      });
	
	    return defer.promise;
	}]);
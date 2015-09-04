angular.module('PotatoFlickr')
	.filter('photoAuthor', function () {
			return function(input) {
			  return 'https://www.flickr.com/photos/' + input;
			};
	});
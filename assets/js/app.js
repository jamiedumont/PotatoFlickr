var angular = require('angular');

// Define Routes

angular.module('PotatoFlickr', [require('angular-route'), require('angular-sanitize'), require('angularjs-filters')])
	.config(['$routeProvider', function ($routeProvider) {
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
	}]);
	

	
// Services	
	// Factory to manage the JSON feed fron Flickr
require('./services/FlickrApi');

// Controllers
	// Main controller for dealing with the feed
require('./controllers/MainController');
	// Controller for managing the "detail" view
require('./controllers/DetailController');	
	
	
// Filters
	// Filter to append authors name to required URL
require('./filters/photoAuthor');
	// Filter to clean the description field. Please note that this is not currently in use, as I was not able to get it to work. I have left the code as an exmaple of how I was trying to solve the problem.
require('./filters/cleanDescription');
	// Filter that outputs a list of buttons from the tad data in the JSON feed.
require('./filters/tagsLinks');


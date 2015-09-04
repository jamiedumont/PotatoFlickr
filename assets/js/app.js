var angular = require('angular');

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
require('./services/FlickrApi');

// Controllers
require('./controllers/MainController');
require('./controllers/DetailController');	
	
	
// Filters
require('./filters/photoAuthor');
require('./filters/cleanDescription');
require('./filters/tagsLinks');


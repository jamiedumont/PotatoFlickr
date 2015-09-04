angular.module('PotatoFlickr')
.filter('cleanDescription', function ($sce) {
		return function(input) {
			var trim = require('trim');
			var a = angular.element("<div>").append($sce.trustAsHtml(input));
			a.find('p:nth-child(1), p:nth-child(2)').remove();
			var output = trim(a.text());
			return output || 'No description available.';
		};
	});
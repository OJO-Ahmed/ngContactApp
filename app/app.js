'use strict';

// Declare app level module which depends on views, and components
angular.module('myContactApp', [
	'ngRoute',
	'firebase',
	'myContactApp.contacts'
	]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/contacts'});
}]);

'use strict';

angular.module('myContactApp.contacts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: 'conCtrl'
  });
}])

.controller('conCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
	console.log("trying out contact");
	console.log($scope)
}]);
'use strict';

angular.module('myContactApp.contacts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: 'conCtrl'
  });
}])

.controller('conCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {

	
	var ref = firebase.database().ref();
    // download the data into a local object
    $scope.contact = $firebaseObject(ref);
    // putting a console.log here won't work, see below

	// $scope.contacts = $firebaseArray(ref);
	// console.log('$scope.contact');

	$scope.showAddForm = function(){
		$scope.addFormShow = true;
	}
	$scope.hide = function(){
		$scope.addFormShow = false;
	}
	$scope.addFormSubmit = function(){
		console.log('Adding contact....');

		// Assign values
		if($scope.name){var name = $scope.name} else{var name = null;}
		if($scope.email){var email = $scope.email} else{var email = null;}
		if($scope.company){ var company = $scope.company} else{var company = null;}
		if($scope.mobile_phone){ var mobile_phone = $scope.mobile_phone} else{var mobile_phone = null;}
		if($scope.home_phone){var home_phone = $scope.home_phone} else{var home_phone = null;}
		if($scope.work_phone){var work_phone = $scope.work_phone} else{var work_phone = null;}
		if($scope.street_address){var street_address = $scope.street_address} else{var street_address = null;}
		if($scope.city){ var city = $scope.city} else{var city = null;}
		if($scope.state){ var state = $scope.state} else{var state = null;}
		if($scope.zipcode){ var name = $scope.zipcode} else{var zipcode = null;}

		//Build Object
		$scope.contact.$add({
			name: name,
			email: email,
			company: company,
			phones: [{
				mobile: mobile_phone,
				home: home_phone,
				work: work_phone
			}],
			Address: [{
				street_address: street_address,
				city: city,
				state: state,
				zipcode: zipcode 
			}]
		})
		.then(function(ref){
				var id = ref.key();
				console.log("added contact with id" + id);

				// clearfield
				clearFields();

				//Hide Form
				$scope.addFormShow = false;
				$scope.msg = "contact Added";
		}); 
	}

	function clearfields(){
		console.log('clearing All fields...');
		$scope.name = "";
		$scope.email = "";
		$scope.company = "";
		$scope.mobile_phone = "";
		$scope.home_phone = "";
		$scope.work_phone = "";
		$scope.street_address = "";
		$scope.city = "";
		$scope.state = "";
		$scope.zipcode = "";
	}
}]);
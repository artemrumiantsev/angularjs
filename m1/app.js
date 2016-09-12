(function () {
	'use strict';

	angular.module('LunchCheck', [])

	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];


	function LunchCheckController($scope) {
		$scope.msg = "";
		$scope.lunch = "";

		$scope.check = function() {
			var items = $scope.lunch
						.trim()
						.split(',')
						.filter(({length}) => length)
						.length;
			$scope.msg = !items
					?($scope.color = 'red', 'Please enter data first')
					:($scope.color = 'green', items < 4
						?'Enjoy!'
						:'Too much!');
		}
	}	


})();
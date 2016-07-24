
myApp.controller('createController', function($scope, $location, $routeParams, userFactory,$sessionStorage){

$scope.createPoll = function(){
		console.log('createPoll createController', $scope.poll);   
		userFactory.createPoll($scope.poll, function(pollArray){
			$scope.polls = pollArray;
			$location.url('/polls');
		})      
	} 

}) 
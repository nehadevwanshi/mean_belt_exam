myApp.controller('listController', function($scope, $routeParams, $location, userFactory){

	var mongId = $routeParams.id;
	userFactory.getUsers(userId, function(data){
		console.log('show controller,', data);
		$scope.listUser = data.data[0];
	});
	
	$scope.updateUser = function(){
		userFactory.updateFriend($scope.listUser, function(data){
			$location.path('/');
		})
	}
})
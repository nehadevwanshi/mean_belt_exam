myApp.controller('showController', function($scope, $location,$route,$routeParams, userFactory, $sessionStorage){

	var id = $routeParams.id;
	$scope.login_user = $sessionStorage.login_user;

	userFactory.showPoll(id, function(data){
		console.log('show controller,', data);
		$scope.poll = data.data;
	})

	$scope.addVote = function(id, option){
		console.log('showuser from indexController ' + id + " option " + option);
		userFactory.addVote(id, option); 
		//$location.url('/show_ques/'+id);    
		$route.reload();
	}

})  
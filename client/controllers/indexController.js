myApp.controller('indexController', function($scope, $sessionStorage,  userFactory, $location){

	console.log('I am able to load my indexController along with my index partial ' );  
	//$scope.login_user = userFactory.getLoginUser();

	userFactory.getPolls(function(data){
		console.log('this is data in indexController get Users', data);
		$scope.polls = data;
		$scope.login_user = $sessionStorage.login_user;
			//$location.url('/');  		                       
	})   

	$scope.login = function(){
		userFactory.login($scope.newUser.name)   
		$sessionStorage.login_user = $scope.newUser.name;
		$scope.login_user = $sessionStorage.login_user;
		$location.url('/polls');  
	}
	    
	$scope.deletePoll = function(id, index){
		console.log('deletepoll from indexController' + id);
		userFactory.deletePoll(id, index, function(data){
		$scope.polls = data;
		}) 
	}

	$scope.logout = function(){
		userFactory.logout() 
		$sessionStorage.login_user = null
		//$scope.login_user = $sessionStorage.login_user; 
		$location.url('/');  
	}
     
})     
    


			
	
	

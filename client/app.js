var myApp = angular.module('Myapp', ['ngRoute', 'ngStorage']);
// We instantiate our application and we inject ngrouter so that it's available
// and so that we can use it to set up our routes below. 



// this is our router. You can choose to set your controllers on the partial
// but I prefer to set my controllers here because it's cleaner
(function(){
	myApp.config(function($routeProvider){
		$routeProvider
			.when('/', {
				controller: 'indexController',
				templateUrl: "partials/login.html"
			})
			
			.when('/polls', {
				controller: "indexController", 
				templateUrl: "partials/list_polls.html"
			})
			.when('/create_poll_form', {
				controller: 'createController', 
				templateUrl: "partials/create_poll.html"
			})	

			.when('/show_ques/:id', {
				controller: 'showController', 
				templateUrl: "partials/show.html"
			})
		
			.when('/vote/:id', {
				controller: 'indexController', 
				templateUrl: "partials/show.html"
			})

			.when('/delete_poll/:id', {
				controller: 'indexController',
				templateUrl: "partials/list_polls.html"
			})

		
	})
}());     




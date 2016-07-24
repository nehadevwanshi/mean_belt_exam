myApp.factory('userFactory', function($http,$sessionStorage){
 

	var polls = []
	var login_user = $sessionStorage.login_user
	var factory = {}
	var votes = []


	factory.getLoginUser = function(callback){
		return login_user ;   
	}

	factory.getPolls = function(callback){
		$http.get('/polls').then(function(data){
			users = data.data;                             
			callback(data.data);
		});   
	}

	factory.createPoll = function(info, callback){
		info.user_name = login_user;
		$http.post('/polls', info).then(function(response){
			if(response.error){
				callback(response);
			} else {
				console.log(" this is our friend data " +response)
				polls.push(response.data)    
				callback(polls);
			}   
		})
	}
	 
	factory.login = function(user_name){
		login_user = user_name
		
	}

	factory.showPoll = function(id, callback){
		$http.get('/show_ques/' + id).then(function(user){
			console.log('made it back from backend this one user', user);
			callback(user);
		})
	}

	factory.addVote = function(id, option){
		$http.post('/vote/'+id,{id:id,option_field: option} ).then(function(response){
			if(response.error){
			} else {
				console.log(" this is our friend data " +response.data[option])
			}   
		})
	}

	factory.deletePoll = function(id, index,callback){
		console.log("this is the index " + index );
		console.log("deletePoll factory method "+ id)                     
		$http.get('/delete_poll/' + id).then(function(response){      
			console.log("this is the index " + index );
			console.log(" before remove polls " + polls)
			polls.splice(index, 1);
			console.log("after polls " + polls)
			callback(polls);
		})
	}

	factory.logout = function(user_name){
		user_name = null;
	}

	return factory;
})
var users = require('./../controllers/users.js');

module.exports = function(app){
	

	app.post('/polls', function(req, res){
		console.log('made it to my /user route');
		users.createPoll(req, res);
	})                                        

	app.get('/polls', function(req, res){
		console.log(' made it to my /users get route');
		console.log(" this is the user model" + users)

		users.getPolls(req, res);
	})

	app.get('/create_poll_form', function(req, res){
		console.log('made it to my /delete_user get route');
		//users.createPoll(req, res);
	})

	app.get('/show_ques/:id', function(req, res){
		console.log('made it to my /delete_user get route');
		users.showPoll(req, res);
	})

	app.post('/vote/:id', function(req, res){
		console.log('made it to my /delete_user get route');
		users.addVote(req, res);
	})

	app.get('/delete_poll/:id', function(req, res){
		console.log('made it to my /delete_poll get route');
		users.deletePoll(req, res);
	})

	

}
  
	
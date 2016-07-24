var mongoose = require('mongoose');
var Polldb = mongoose.model('Polldb');

module.exports = (function(){  
	return {
		getPolls: function(req, res){
			Polldb.find({}, function(err, users){
				if(err){
					console.log(err);
					console.log('getfriends function fusers controller');
				} else {
					res.json(users);
				}

			})
		},

		////////

		createPoll: function(req, res){
			user = new Polldb(req.body);
			user.save(function(err, result){
				if(err){
					console.log(err);
					console.log('error creating a new user');
				} else {
					console.log('this is our new user',result);  
					res.json(result);
				}
			})
		},
		/////

		deletePoll: function(req, res){
			Polldb.findByIdAndRemove({_id: req.params.id}, function(err, result){
				if(err){
					console.log(err);
					console.log('error deleting a user');
				} else {
					console.log('this is our new user',result);
					res.json(result);

				}
			})
		},

		/////

		showPoll: function(req, res){
			Polldb.findById({_id: req.params.id}, function(err, result){
				if(err){
					console.log(err);
					console.log('error deleting a friend');
				} else {
					console.log('this is our new friend',result);
					res.json(result);

				}
			})
		},

		////

		addVote: function(req, res){
			console.log('option_field ' + req.body.option_field + ", id " + req.params.id)
			Polldb.findOne({_id: req.params.id}, function(err, user){
				if (req.body.option_field == 'option1_count')
					user.option1_count += 1;
				else if (req.body.option_field == 'option2_count')
					user.option2_count += 1;
				else if (req.body.option_field == 'option3_count')
					user.option3_count += 1;
				else user.option4_count += 1;
			user.save(function(err, result){
				if(err){
					console.log(err);
					console.log('error creating a new user');
				} else {
					console.log('this is our new user ',result);  
					res.json(result);
				}
			})
			})
		},
	}        
})();     



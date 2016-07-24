var mongoose = require('mongoose');
var  UserSchema = new mongoose.Schema({
    user_name: String,
    date_posted : { type: Date, required: true, default: Date.now },     
    vote: Number, 
    your_ques: String,
    option1: String,
    option2: String,
    option3: String,
    option4: String,
    option1_count : { type: Number, default: 0},   
    option2_count: { type: Number, default: 0},
    option3_count: { type: Number, default: 0},       
    option4_count: { type: Number, default: 0}
});

mongoose.model('Polldb', UserSchema);
// Validations
//FriendSchema.path('color').required(true, 'Color cannot be blank');
 UserSchema.path('user_name').required(true, 'Name cannot be blank');

//UserSchema.path('date_posted').required(true, 'Post Date cannot be blank');

 //UserSchema.path('vote').required(true, 'Post Date cannot be blank');

 UserSchema.path('option1').required(true, 'Option1 cannot be blank');

 UserSchema.path('option2').required(true, 'Option1  cannot be blank');     

 UserSchema.path('option3').required(true, 'Option1  cannot be blank');

 UserSchema.path('option4').required(true, 'Option1  cannot be blank');

 //UserSchema.path('option1_count').required(true, 'count cannot be blank');

 //UserSchema.path('option2_count').required(true, 'count cannot be blank');

 //UserSchema.path('option3_count').required(true, 'count cannot be blank');

 // UserSchema.path('option4_count').required(true, 'count cannot be blank');


var mongoose = require('mongoose');

var User =mongoose.model('User',{
  username:{
    type:String,
    required:true,
    minlength:5,
    trim:true
  },
  email:{
    type:String,
    required:true,
    minlength:10,
    trim:true
  }
 });


module.exports = {User};

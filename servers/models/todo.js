var mongoose =require('mongoose');

var Todo = mongoose.model('Todo',{
  text:{
    type: String,
    required :true,
    minlength:5,
    trim:true
    },
    completed:{
      type:Boolean,
      required:true,
      default:false
    },
    completedAt:{
       type:Number,
       defautl:null
      }
});

module.exports = {Todo};

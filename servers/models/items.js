var mongoose = require('mongoose');
var Schema= mongoose.Schema;

var ItemSchema = new Schema({
  number:{
    type:Number,
    required:true
  },
  name:{
    type:String,
    required:true,
    minlength:5,
    trim:true
  },
  size:{
    type:String,
    minlength:1,
    trim:true,
    required:true
  }
});

var Item = mongoose.model('Item',ItemSchema);

module.exports={Item};

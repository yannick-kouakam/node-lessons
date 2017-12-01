const mongoose = require('mongoose');
var Schema =mongoose.Schema;

const {Item} = require('./items');


const OrderSchema = new Schema({
  name:{
    type:String,
    required:true,
    minlength:5
  },
  status:{
    type:String,
    required:true,
    default:"Initialized",
    minlength:5
  },
  items:[{ type:Schema.Types.ObjectId,ref:'Item'}]  
});

var Order = mongoose.model('Order',OrderSchema);

module.exports = {
  Order
};

// items:{
//   type:[Schema.Types.ObjectId],
//   ref:'Item',
//   required:true
// },

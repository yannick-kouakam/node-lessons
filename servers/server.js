var {mongoose}  = require('./bd/config');
var {User} = require('./models/users');
var {Todo} = require('./models/todo');
var {Order} = require('./models/order');
var {Item} = require('./models/items');

var express = require('express');
var bodyparser = require('body-parser');
var http = require('http');

const  port  =process.env.PORT||3000;

var app = new express();

app.use(bodyparser.json())
app.post('/user/new',(req,res)=>{
//console.log(req.body);
   var newUser = new User({
     username:req.body.username,
     email: req.body.email
   });
     newUser.save().then((r)=>{
       res.send(r);
     },(err)=>{
      res.status(400).send(err);
    });
});

app.get('/user',(req,res)=>{
  User.find()
    .then((docs)=>{
      res.send(docs)
    },(err)=>{
      res.status(400).send(err);
    });
});

app.post('/todo/new',(req,res)=>{

});


app.post('/order/new',(req,res)=>{
  let order = new Order({
    name: req.body.name,
    status:req.body.status,
    items:[]
  });

  let  list_items = req.body.items;
  for(var i=0;i<list_items.length;i++){
    item=list_items[i];
    var newItem = new Item({
      name:item.name,
      size:item.size,
      number:item.number,
    });
    newItem.save();
           order.items.push(newItem);
  }

  order.save()
  .then((result)=>{
    res.send(result);
  }).catch((reject)=>{
    console.log(reject);
    res.status(400).send(reject);
  })
 });

app.post('/order/add',(req,res)=>{

  Order.findOne({name:req.body.name})
  .then(order=>{
     if(!order){
       console.log("order not found");
       return Promise.reject('order not found');
     }
    let item = req.body.item;//{name :req.body.item.name,size:req.body.item.size,number:re.body.item.number};
    let newItem = new Item(item);
     newItem.save()
      order.items.push(newItem);
        order.save()
        .then((order)=>{
          res.send(order);
        });
  })
  .catch(err=>{
    res.status(400).send(err);
  })
})

app.get('/orders',(req,res)=>{

  Order.find()
    .populate('items')
    .then((docs)=>{
      res.send(docs)
    },(err)=>{
      res.status(400).send(err);
    });
});


app.listen(port,()=>{
  console.log(`runnig on port ${port}`);
});


module.exports = {app};

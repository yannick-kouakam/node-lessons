var {mongoose}  = require('./bd/config');
var {User} = require('./models/users');
var {Todo} = require('./models/todo');

var express = require('express');
var bodyparser = require('body-parser');
var http = require('http');

var app = new express();

app.use(bodyparser.json())
app.post('/user/add',(req,res)=>{
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
})

app.listen(3000,()=>{
  console.log('runnig on port 3000');
});

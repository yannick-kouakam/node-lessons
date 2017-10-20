const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
   if(err){
     console.log("unabe to connect  to the database");

   }else {
     console.log('Connection to Mongo Db successful');
   }


   db.collection('Todos').find({completed:true}).toArray()
   .then((docs)=>{
     console.log(JSON.stringify(docs,undefined,2));
   },(err)=>{
       console.log("error ",err);
     });

   db.close();
});

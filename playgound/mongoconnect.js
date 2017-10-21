const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
   if(err){
     console.log("unabe to connect  to the database");

   }else {
     console.log('Connection to Mongo Db successful');
   }

//    db.collection('Todos').insertOne({
//     txt:"third Todo insertion",
//     completed:true
//   },
// (err,res)=>{
//      if(err){
//        console.log('insertion failed ',err);
//        return;
//      }
//
//      console.log(JSON.stringify(res.ops,undefined,2));
//
//    });

  //  db.collection('Users').insertOne({
  //    name:'Yannick',
  //    email:'ykouakam@gmail.com',
  //  },(err,res)=>{
  //    if(err){
  //      console.log("error ",err);
  //      return;
  //    }
  //    console.log(JSON.stringify(res.ops,undefined,2));
  //  })

  db.collection('Todos').findOneAndDelete({txt:'fith to insertion'})
  .then((res)=>{
    console.log(res);
  },(err)=>{
    console.log('delection failed');
  })
  // db.close();
});

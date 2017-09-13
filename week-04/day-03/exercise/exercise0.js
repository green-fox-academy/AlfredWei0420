'use strict';

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/epam';

MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the MongoDB server. Error:', err);
  }
  console.log('Connection established to ' + url);
  var collection  = db.collection("students");
  collection.remove();
  collection.insert( [
    {
      "name": "Alexander Zhao",
      "github": "ChiuMungZitAlexander",
      "gender": "male"
    },
    {
      "name": "Alfred Wei",
      "github": "AlfredWei0420",
      "gender": "male"
    },
    {
      "name": "Alice Shen",
      "github": "aliceshen227",
      "gender": "female"
    },
    {
      "name": "Chase Wang",
      "github": "chasssssse",
      "gender": "male"
    },
    {
      "name": "Chris Huang",
      "github": "ChrisH404",
      "gender": "male"
    },
    {
      "name": "Haochen Li",
      "github": "haochenli",
      "gender": "male"
    },
    {
      "name": "Jerry Liu",
      "github": "Jerry-ZWL",
      "gender": "male"
    },
    {
      "name": "Jessie Cai",
      "github": "ttttsai",
      "gender": "female"
    },
    {
      "name": "John Doe",
      "github": "janedoe",
      "gender": "male"
    },
    {
      "name": "Leo Lam",
      "github": "linjialiang1234",
      "gender": "male"
    },
    {
      "name": "Vinson Liu",
      "github": "sliu102",
      "gender": "male"
    },
    {
      "name": "Zhengnan Zhang",
      "github": "ZhengnanZhang",
      "gender": "male"
    },
    {
      "name": "Zoe Zhou",
      "github": "Zoe_Zhou",
      "gender": "male"
    }
  ]);
  //EX2 print my info
  // collection.find({"name":"Alfred Wei"}).toArray(function(err,docs){
  //   console.log(docs);
  // });
  //EX2 print github name
  // collection.find({},{"github":1, _id:0}).toArray(function(err,docs){
  //   console.log(docs);
  // });
  //EX2 print name except me not work
  // collection.find({},{"name": {$nin: ["Alfred Wei"]}, "name":1, _id:0}).toArray(function(err,docs){
  //  // ({ name: { $nin: ['Zoe Zhou'] } }, { name: 1, _id: 0 })
  //   console.log(docs);
  // });
  //EX2 print female
  collection.find({gender: {$nin: ["male"]}}, {name:1, _id:0}).toArray(function(err,docs){
     console.log(docs);
   });
   //EX 3 add johndoe and age;
   collection.update({'github':"janedoe"},{$set:{'github':'johndoe'}});
   //WriteResult({ 'nMatched' : 1, "nUpserted" : 0, "nModified" : 1 }) not work
   collection.update({'name':"Alfred Wei"},{$set:{'age':'28'}});
   //EX 4 remove John Doe
   collection.remove({'name':'John Doe'});
  db.close();//could not written in to collection ?
});


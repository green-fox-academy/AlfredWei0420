'use strict';
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/raddit';

// function mongodbConnect () {
MongoClient.connect(url, function (err, db) {
    if (err) {
        console.log('Unable to connect to the MongoDB server. Error:', err);
    }
    console.log('Connection established to ' + url);
    var collection  = db.collection("list");
    collection.remove();
    collection.insert([
        {
            "id": 0,
            "title": "Dear JavaScript",
            "href": "http://9gag.com",
            "timestamp": 1494339525,
            "score": 791,
            "owner": null,
            "vote": 1
          },
          {
            "id": 1,
            "title": "Crockford",
            "href": "http://9gag.com",
            "timestamp": 1494138425,
            "score": 567,
            "owner": "kristof4",
            "vote": -1
          }
    ])
    // collection.find().toArray(function(err,docs){
    // console.log(docs);
    //  });
    db.close();
});
// }

function listing() {
    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log('Unable to connect to the MongoDB server. Error:', err);
        }
        var collection  = db.collection("list")
        collection.find().toArray(function(err,obj){
        res.send(obj);
        });
      db.close();
    });
  }

  var newData = {
	"id": 55,
    "title": "FXXX",
    "href": "http://9gag.com",
    "timestamp": 14943459525,
    "score": 791,
    "owner": Chase,
    "vote": 1
}
  
function post(){
    MongoClient.connect(url, function (err, db){
        if (err) {
            console.log('Unable to connect to the MongoDB server. Error:', err);
        }
        var collection  = db.collection("list");
        collection.insert(newData);
        collection.find().toArray(function(err,obj){
            res.send(obj);
            });
        db.close();
    })
}
'use strict';
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/todo';

var ini = [
    {
        "description": "Read the Clean Code",
        "state": 0
      },
      {
        "description": "Drink beer",
        "state": 1
      }
]
// function mongodbConnect () {
MongoClient.connect(url, function (err, db) {
    if (err) {
        console.log('Unable to connect to the MongoDB server. Error:', err);
    }
    console.log('Connection established to ' + url);
    var collection  = db.collection("list");
    collection.remove();
    collection.insert(ini);
    db.close();
});


exports.listing = function (res) {
    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log('Unable to connect to the MongoDB server. Error:', err);
        }
        var collection  = db.collection("list")
        collection.find().toArray(function(err,obj){
        console.log(obj);
        res.send({"todos":obj});
        });
        db.close();
    });
  }
  exports.listingitem = function (res,id) {
    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log('Unable to connect to the MongoDB server. Error:', err);
        }
        var collection  = db.collection("list")
        collection.find({'_id' :mongodb.ObjectId(id)}).toArray(function(err,obj){
        console.log(obj);
        res.send({"todos":obj});
        });
        db.close();
    });
  }

exports.posting = function (res,body) {
    MongoClient.connect(url, function (err, db){
        if (err) {
            console.log('Unable to connect to the MongoDB server. Error:', err);
        }
        var collection  = db.collection("list");
        collection.insert(body);
        collection.find().toArray(function(err,obj){
            res.send(obj);
            });
        db.close();
    })
}

exports.putState = function(res, id) {
    MongoClient.connect(url, function (err, db){
        if (err) {
            console.log('Unable to connect to the MongoDB server. Error:', err);
        }
        var collection  = db.collection("list");
        collection.update({'_id' :mongodb.ObjectId(id)},{$set:{'state':1}});
        collection.find({'_id' :mongodb.ObjectId(id)}).toArray(function(err,obj){
            res.send(obj);
            db.close();
            });
    })
}


exports.delete = function(res,id){
    MongoClient.connect(url, function (err, db){
        if (err) {
            console.log('Unable to connect to the MongoDB server. Error:', err);
        }
        var collection  = db.collection("list");
        collection.remove({'_id' :mongodb.ObjectId(id)});
        collection.find().toArray(function(err,obj){
            res.send(obj);
         }); //show results
        db.close();
    })
}


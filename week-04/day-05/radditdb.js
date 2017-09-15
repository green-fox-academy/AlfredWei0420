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

exports.listing = function (res) {
    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log('Unable to connect to the MongoDB server. Error:', err);
        }
        var collection  = db.collection("list")
        collection.find({},{_id:0}).toArray(function(err,obj){
        console.log(obj);
        res.send({"posts":obj});
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

exports.upvote = function(res, getId) {
    MongoClient.connect(url, function (err, db){
        if (err) {
            console.log('Unable to connect to the MongoDB server. Error:', err);
        }
        var collection  = db.collection("list");
        collection.find({"id":getId}).toArray(function(err,obj){
            var score = obj[0].score + 1;
            collection.update({'id':getId},{$set:{'score':score}});
            });
        collection.find({"id":getId}).toArray(function(err,obj){
            res.send(obj[0]);
            db.close();
            });
    })
}

exports.downvote = function(res, getId) {
    MongoClient.connect(url, function (err, db){
        if (err) {
            console.log('Unable to connect to the MongoDB server. Error:', err);
        }
        var collection  = db.collection("list");
        collection.find({"id":getId}).toArray(function(err,obj){
            var score = obj[0].score - 1;
            collection.update({'id':getId},{$set:{'score':score}});
            });
        collection.find({"id":getId}).toArray(function(err,obj){
            res.send(obj[0]);
            db.close();
            });
    })
}

exports.delete = function(res,getId){
    MongoClient.connect(url, function (err, db){
        if (err) {
            console.log('Unable to connect to the MongoDB server. Error:', err);
        }
        var collection  = db.collection("list");
        //collection.find({"id":getId}).toArray(function(err,obj){
        collection.remove({'id':getId});
            
            //});
        collection.find().toArray(function(err,obj){
            res.send(obj);
         }); //show results
        db.close();
    })
}

exports.modify = function(res,getId,body){
    MongoClient.connect(url, function (err, db){
        if (err) {
            console.log('Unable to connect to the MongoDB server. Error:', err);
        }
        var collection  = db.collection("list");
        //collection.find({"id":getId}).toArray(function(err,obj){
            collection.update({'id':getId},{$set:{'title':body.title}});
            collection.update({'id':getId},{$set:{'href':body.href}});
        //    });
        collection.find({"id":getId}).toArray(function(err,obj){
            res.send(obj[0]);
            db.close();
            });
    })
}
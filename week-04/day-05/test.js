'use strict';

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/epam';
var defaultData = [{"title":"Dear JavaScript","href":"http://9gag.com","timestamp":1494339525,"score":791,"owner":null},{"title":"Crockford","href":"http://9gag.com","timestamp":1494138425,"score":567,"owner":"kristof4"}];

var count = 0;

function getTimestamp(){
    var ts = new Date().getTime();
    var i = ts % 1000;
    var t = new mongodb.Timestamp(i, Math.floor(ts * 0.001));

    return t;
}
function createDB(){
    MongoClient.connect(url,function(err, db){
        if (err) {
            console.log('Unable to connect to the MongoDB server. Error:', err);
        }
        console.log('Connection established to ' + url);

        if(!db.collection("reddit")){
            console.log("no reddit");
            db.createCollection("reddit", function(err, res) {
                if (err) throw err;
                console.log("Collection reddit created!");
                //db.close();
              });
        }

        var redditDB = db.collection("reddit");
        redditDB.remove();
        redditDB.insertMany(defaultData, function(err, res){
            console.log(res.insertedCount);
        });
        db.close();
    }); 
}

function showData(callback){
    MongoClient.connect(url,function(err, db){
        var redditDB = db.collection("reddit");
        redditDB.find({}).toArray(function(err, result) {
            if (err) throw err;
            count = result.length;
            db.close();
            callback(result);
          });
    });
}


function createPost(body, username, callback){
    MongoClient.connect(url,function(err, db){
        var redditDB = db.collection("reddit");
        
        //body.id = count;   
        body.score = 0;
        body.timestamp = new Date().getTime();
        body.owner = username || null;

        redditDB.insertOne(body, function(err, res){
            callback(body);
            console.log(res.insertedCount);
        });
        
        db.close();
    });
}

function upVote(id, callback){
    MongoClient.connect(url, function(err, db){
        var redditDB = db.collection("reddit");
        redditDB.findOne({"_id" : mongodb.ObjectId(id)}, function(err, res){
            res.score++;
            redditDB.update({"_id" : mongodb.ObjectId(id)}, res, function(err,res2){
                db.close();
                callback(res);
            });    
        });

       // redditDB.close();
    });
}

function downVote(id, callback){
    MongoClient.connect(url, function(err, db){
        var redditDB = db.collection("reddit");

        redditDB.findOne({"_id" : mongodb.ObjectId(id)}, function(err, res){
            res.score--;
            redditDB.update({"_id" : mongodb.ObjectId(id)}, res);
            callback(res);
        });
    });
}
function deletePost(id, callback){
    MongoClient.connect(url, function(err, db){
        var redditDB = db.collection("reddit");

        redditDB.remove({"_id" : mongodb.ObjectId(id)}, function(err,res){
            callback(res);
        });
    });
}

function modifyPost(id, body, callback){
    MongoClient.connect(url, function(err, db){
        var redditDB = db.collection("reddit");

        redditDB.findOne({"_id" : mongodb.ObjectId(id)}, function(err, res){
            res.title = body.title;
            res.href = body.href;
            res.timestamp = new Date().getTime();
            redditDB.update({"_id" : mongodb.ObjectId(id)}, res);
            callback(res);
        });
    });
}

module.exports= {
    createDB:createDB,
    showData:showData,
    createPost:createPost,
    upVote:upVote,
    downVote:downVote,
    deletePost:deletePost,
    modifyPost:modifyPost
}

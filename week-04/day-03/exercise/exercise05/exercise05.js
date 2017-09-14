'use strict';
var express = require('express');
var app = express();
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/epam';

MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the MongoDB server. Error:', err);
  }
  console.log('Connection established to ' + url);
  var collection  = db.collection("students");
  db.close();//could not written in to collection ?
});

app.get('/students', function(req, res){
    var name = req.query.name;
    var github = req.query.github;
    var gender = req.query.gender;
    var fields = req.query.fields;
    //console.log(name);

});

app.listen(8088);
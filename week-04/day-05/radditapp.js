'use strict';

var express = require('express');
var mdb = require('./radditdb.js');
var MongoClient = require('mongodb').MongoClient;
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
//var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/hello', function(req, res) {
    res.send("hello") ;
});

app.get('/get', function(req,res){
    mdb.listing(res);
})

app.post('/post', jsonParser,function(req,res){
    mdb.posting(res);
})

app.put("/posts/:id/upvote",jsonParser,function(req,res){
    var getId = parseInt(req.params.id);
    console.log(getId);
    mdb.upvote(res,getId);
})

app.put("/posts/:id/downvote",jsonParser,function(req,res){
    var getId = parseInt(req.params.id);
    console.log(getId);
    mdb.downvote(res,getId);
})

app.delete("/posts/:id",jsonParser,function(req,res){
    var getId = parseInt(req.params.id);
    console.log(getId);
    mdb.delete(res,getId);
})

app.put("/posts/:id",jsonParser,function(req,res){
    var getId = parseInt(req.params.id);
    console.log(getId);
    mdb.modify(res,getId);
})

app.listen(8088);

'use strict';
var id = 2;
var express = require('express');
var mdb = require('./radditdb.js');
var MongoClient = require('mongodb').MongoClient;
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
//var urlencodedParser = bodyParser.urlencoded({ extended: false });
// app.use(express.static('./public'));
app.use('/',express.static('public'));

app.get('/', function(req, res){
    console.log(__dirname);
    res.sendFile(__dirname + "/public/index.html");
});

app.get('/hello', function(req, res) {
    res.send("hello") ;
});

app.get('/posts', function(req,res){
    mdb.listing(res);
});

app.post('/posts', jsonParser,function(req,res){
   
    var body={
        'title':req.body.title,
        'href':req.body.href,
        'id': id,
        'score':0
    }
    id++;
    mdb.posting(res,body);
});

app.put("/posts/:id/upvote",jsonParser,function(req,res){
    var getId = parseInt(req.params.id);
    console.log(getId);
    mdb.upvote(res,getId);
});

app.put("/posts/:id/downvote",jsonParser,function(req,res){
    var getId = parseInt(req.params.id);
    mdb.downvote(res,getId);
});

app.delete("/posts/:id",jsonParser,function(req,res){
    var getId = parseInt(req.params.id);
    mdb.delete(res,getId);
});

app.put("/posts/:id",jsonParser,function(req,res){
    var getId = parseInt(req.params.id);
    var body = {
        "title" : req.body.title,
        "href" : req.body.href
    };
    mdb.modify(res,getId,body);
});

app.listen(8088);

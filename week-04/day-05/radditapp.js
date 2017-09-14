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
    mdb.listing();
})

app.post('/post',function(req,res){
    
})


app.listen(8088);

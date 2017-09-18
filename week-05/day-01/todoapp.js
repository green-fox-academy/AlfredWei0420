'use strict';
var express = require('express');
var mdb = require('./tododb.js');
var MongoClient = require('mongodb').MongoClient;
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

app.use('/',express.static('public'));

app.get('/', function(req, res){
    console.log(__dirname);
    res.sendFile(__dirname + "/static/index.html");
});

//print the list
app.get('/api/todos', function(req,res){
    mdb.listing(res);
});
//print single item
app.get('/api/todos/:id', function(req,res){
    var id = req.params.id;
    mdb.listingitem(res,id);
});

//post
app.post('/api/todos', jsonParser,function(req,res){
   var body={
        'description':req.body.description
    }
    mdb.posting(res,body);
});
// change the state
app.put("/api/todos/:id",jsonParser,function(req,res){
    var id = req.params.id;
    mdb.putState(res,id);
});

//delete 
app.delete("/api/todos/:id",jsonParser,function(req,res){
    var id = req.params.id;
    mdb.delete(res,id);
});

app.listen(8080);

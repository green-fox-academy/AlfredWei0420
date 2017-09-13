'use strict';
// var http = require('http');

// var server = http.createServer(function (req, res){
// console.log(req.url);
//     res.writeHead(200,{'Content_Type': 'text/plain'});
//     res.end("Hey ninjas");
// });

// server.listen(3000,"127.0.0.1");
// console.log("U listening 3000");

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use('/assets',express.static('assets'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/doubling', function(req, res) {
    var input = parseInt(req.query.input, 10);
    if(req.query.input === undefined) {
        res.send({
            "error": "Please provide an input!"
        });
    }else {
        var calculate = {
            'received':input,
            'result': input*2
        }
        res.send(calculate);
    }
});

app.get('/greeter', function(req, res){
    var name = req.query.name;
    var title = req.query.title;
    //console.log(title);
    if (name === undefined || title === undefined ||title === "") {
        res.send({
            "error": "Please provide a name!"
          });
    }else {
        var obj = {
            "welcome_message": "Oh, hi there" + " " + name + "," + " my dear" + " " 
            + title + "!"
        };
        res.send(JSON.stringify(obj));
    }
});

app.get('/appends/:parameter', function(req, res) {
    var append = req.params;
    console.log(append);
    res.send({"appended": append.parameter+"s"});

})

app.get('/appends/', function(req, res) {
    res.send({"Page not found":"404"});
})

// app.get('/append/:para1', function(req, res){
//     res.send(
//         {
//             param:req.params,
//             query:req.query
//         }
//     )
// }) param example http://localhost:8000/append/dog?type[]=BMW&type[]=OEP

app.post('/dountil/:parameter', jsonParser, function(req, res){
    //var input = parseInt(req.params.number, 10);
    var sum = 0;
    var factor = 1;
    console.log(req.params.parameter);
    console.log(req.body.until);
    if(req.params.parameter === 'sum' && req.body.until !== undefined){
        for(var i = 0;i <= req.body.until;i++ ) {
            sum += i;
        }
        res.send({"result":sum});
        }else if(req.params.parameter === 'factor' && req.body.until !== undefined) {
        for(var i = 1;i <= req.body.until;i++ ){
            factor = factor*i;
        }
        res.send({"result":factor});
    }else {
        res.send({"error": "Please provide a number!"});
    }
    
 });
 
app.post('/arrays', jsonParser, function(req, res){
    var sum = 0;
    var multiply = 1;
    var double = 1;
    var newArray = [];
    var array = req.body.numbers;
    var what = req.body.what;
    console.log(what);
    console.log(array);
    if(what === 'sum' && what !== undefined && array !== undefined) {
        array.forEach(function(e) {
            sum += e;
        }, this);
        res.send({"result": sum});
    }else if(what === 'multiply' && what !== undefined && array !== undefined) {
        array.forEach(function(e){
            multiply = multiply*e;
        });
        res.send({"result": multiply});
    }else if(what === 'double' && what !== undefined && array !== undefined){
        array.forEach(function(e){
            newArray.push(e*2);
        });
        res.send({"result":newArray});
    }else {
        res.send({"error": "Please provide a number!"});
    }

})

app.post('/sith', jsonParser, function(req, res) {
    var 
});


app.listen(8000);
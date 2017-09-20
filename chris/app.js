'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var database = require('./db.js');

var app = express();
var port = 8080;
var jsonParser = bodyParser.json();

var error400 = {
  "error": "Bad request body."
 };

app.use(express.static('../frontend'));

app.listen(port);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// get all todos
app.get('/api/todos', function(req, res) {
  database.findTodos(function(result, status) {
    res.setHeader("content-type", "application/json");
    res.statusCode = status;
    res.send(result);
  });
});

// get todo by id
app.get('/api/todos/:id', function(req, res) {
  var _id = req.params.id;
  database.findTodoById(_id, function(result, status) {
    res.setHeader("content-type", "application/json");
    res.statusCode = status;
    res.send(result);
  });
});

// create new todo
app.post('/api/todos', jsonParser, function(req, res) {
  if (Object.keys(req.body).length >= 2 || Object.keys(req.body).indexOf('description') < 0 || req.body.description ==='') {
    res.statusCode = 400;
    res.setHeader("content-type", "application/json");
    res.send(error400);
  } else {
    var newTodo = {
      "description": req.body.description,
      "state": 0
    }
    database.createTodos(newTodo, function(result, status) {
      res.statusCode = status;
      if (status === 201) {
        res.setHeader("location", "/api/todos/" + result)
        res.send();
      } else {
        res.setHeader("content-type", "application/json");
        res.send(result);
      }
    });
  }
});

// modify todo
app.put('/api/todos/:id', jsonParser, function(req, res) {
  var _id = req.params.id;
  database.modifyTodo(_id, req.body, function(result, status) {
    res.statusCode = status;
    if (status === 204) {
      res.setHeader("content-location", "/api/todos/" + _id);
      res.send();
    }else {
      res.setHeader("content-type", "application/json");
      res.send(result);
    }
  });
});

// delete todo
app.delete('/api/todos/:id', function(req, res) {
  var _id = req.params.id;
  database.deleteTodo(_id, function(result, status) {
    res.statusCode = status;
    if (status === 204) {
      res.setHeader("content-location", "/api/todos/" + _id);
      res.send();
    }else {
      res.setHeader("content-type", "application/json");
      res.send(result);
    }
  });
})
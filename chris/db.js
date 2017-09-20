'use strict';

var mongodb = require('mongodb');
var ObjectId = require('mongodb').ObjectId;

var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/epam';

var error500 = {
  'error': 'Something went wrong.'
};

var error404 = {
  "error": "Resource was not found."
}

// get todos
function findTodos(callback) {
  var whereStr = {};
  MongoClient.connect(url, function (err, db) {
    if (err) {
      callback(error500obj, 500);
    }
    selectData(db, whereStr, error500, function(result, status) {
      callback(result, status);
      db.close();
    });
  });
}

function selectData(db, whereStr, obj, callback) {
  var collection = db.collection('todos');
  collection.find(whereStr).toArray(function(err, result) {
    if(err){
      callback(obj, 500);
      return;
    }
    obj = {
      'todos': result
    };  
    callback(obj, 200);
  });
}

// get todo by id
function findTodoById(_id, callback) {
  var whereStr = {'_id': ObjectId(_id)};
  MongoClient.connect(url, function (err, db) {
    if (err) {
      callback(error500, 500);
    }
    selectOneTodo(db, whereStr, error500, function(result, status) {
      callback(result, status);
      db.close();
    });
  });
}

function selectOneTodo(db, whereStr, obj, callback) {
  var collection = db.collection('todos');
  collection.find(whereStr).toArray(function(err, result) {
    if(err){
      callback(obj, 500);
      return;
    }
    if (result.length > 0) {
      callback(result, 200);
    }else {
      callback(error404, 404);
    }
  });
}

// create todo
function createTodos(newTodo, callback) {
  MongoClient.connect(url, function (err, db) {
    if (err) {
      callback(error500, 500);
    }
    insertData(db, newTodo, function(result, status) {
      callback(result, status);
      db.close();
    });
  });
}

function insertData(db, newTodo, callback) {
  var collection = db.collection('todos');
  collection.insert(newTodo, function(err, result) { 
    if(err){
      callback(error500, 500);
      return;
    }
    callback(result.insertedIds, 201);
  });
}

// modify todo
function modifyTodo(_id, todo, callback) {
  var whereStr = {'_id': ObjectId(_id)};
  MongoClient.connect(url, function (err, db) {
    if (err) {
      callback(error500, 500);
    }
    updateData(db, whereStr, todo, function(result, status) {
      callback(result, status)
      db.close();
    });
  });
}

function updateData(db, whereStr, updateStr, callback) {
  var collection = db.collection('todos');
  collection.update(whereStr, updateStr, function(err,result) {
    if(err){
      callback(error500, 500);
      return;
    }
    if (result.result.n === 0) {
      callback(error404, 404);
    } else {
      callback(null, 204);
    }
  });
}

// delete todo
function deleteTodo(_id, callback) {
  var whereStr = {'_id': ObjectId(_id)};
  MongoClient.connect(url, function (err, db) {
    if (err) {
      callback(error500, 500);
    }
    deleteData(db, whereStr, function(result, status) {
      callback(result, status);
      db.close();
    });
  });
}

function deleteData(db, whereStr, callback) {
  var collection = db.collection('todos');
  collection.remove(whereStr, function(err, result) {
    if(err){
      callback(error500, 500);
      return;
    }
    if (result.result.n === 0) {
      callback(error404, 404);
    } else {
      callback(null, 204);
    }
  });
}

module.exports = {
  findTodos: findTodos,
  findTodoById: findTodoById,
  createTodos: createTodos,
  modifyTodo: modifyTodo,
  deleteTodo: deleteTodo
};
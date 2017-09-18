'use strict';

const API_BASE_URL = 'http://localhost:8080/api/todos/';

window.addEventListener('load', function () {
    var buttonadd = document.getElementById('buttontop');
    var buttondel = document.getElementsByClassName('itemdele')
    buttonadd.addEventListener('click', addItems);  
    buttondel.addEventListener('click', delItems);
  })

function addItems() {
  var name = document.getElementById('name');
  var nameObj ={
      description:name.value,
   }

   fetch(API_BASE_URL, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(nameObj)
  }).then(function (response) {
    console.log(response);
  })
  name.value = '';
}

function delItems(){
    fetch(API_BASE_URL, {
        method: 'delete',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(function (response) {
        console.log(response);
      })
}
'use strict';

const API_BASE_URL = 'https://time-radish.glitch.me/posts';

window.addEventListener('load', function () {
    var button = document.querySelector('button');
    button.addEventListener('click', submitPosts);  
  })

function submitPosts() {
  var link = document.getElementById('link');
  var message = document.getElementById('message');
  var messageObj ={
      url:link.value,
      title:message.value,
      score:1000
   }

   fetch(API_BASE_URL, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(messageObj)
  }).then(function (response) {
    console.log(response);
  })
  link.value = '';
  message.value = '';
}

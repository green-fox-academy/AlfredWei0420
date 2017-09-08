'use strict';

const MESSAGE_LIST = document.querySelector('ul');
const API_BASE_URL = 'https://wakeful-vision.glitch.me/api/';
const MESSAGES = 'messages';

fetch(`${API_BASE_URL}${MESSAGES}`)
.then(parseResponse)
.then(collectMessages)
.then(displayMessages)

function parseResponse(response) {
  //return response.json();
  console.log(response.json());
}

function collectMessages(data) {
  return data.messages.map(function (message) {
    return message.message;
  });
}

function createMessage(message) {
  const li = document.createElement('li');
  li.textContent = message;
  return li
}

function displayMessages(messages) {
  messages.forEach(function (message) {
    const element = createMessage(message);
    MESSAGE_LIST.appendChild(element);
  });
}
'use strict';

const ITEMS = document.querySelector(".items");
//const API_BASE_URL = 'http://localhost:8080';

var index = 0;
var cNUm = 0;
var dNum = 0;
window.addEventListener('load', function () {
    fetch('http://localhost:8080/api/todos')
    .then(parseResponse)
    .then(collectPost)
    .then(display) 
  })


function parseResponse(response){
    //console.log(response.json());
    return response.json();
}

function collectPost(data){
    return data.todos.map(function(e){
        return e;
    });
}

function createItems(){
    var newItem = document.createElement("item");
    newItem.className="itemID";
    newItem.style.height = "120px";
    newItem.style.width = "250px";
    newItem.style.backgroundColor = "#ffe8e4";
    newItem.style.borderRadius = "3px";
    return newItem;
}

function createTitle(description){
    const titleText = document.createElement("p");
    titleText.innerHTML=description;
    titleText.style.marginTop = "0";
    titleText.style.marginLeft = "15px";
    titleText.style.fontWeight = "bold";
    return titleText;
}
function createComButton(){
    var comButton = document.createElement("button");
    comButton.className = "itemcom";
    comButton.style.backgroundColor = "#60ec48";
    comButton.innerText = "Complete";
    comButton.style.marginTop = "15px";
    comButton.style.marginLeft = "15px";
    comButton.style.height = "40px";
    comButton.style.width = "110px";
    comButton.style.padding = "10px";
    comButton.style.textAlign = "center";
    return comButton;
}

function createDelButton(){
    var delButton = document.createElement("button");
    delButton.className= "itemdele";
    delButton.style.backgroundColor = "#f44336";
    delButton.innerText = "Delete";
    delButton.style.marginTop = "15px";
    delButton.style.marginLeft = "15px";
    delButton.style.height = "40px";
    delButton.style.width = "110px";
    delButton.style.padding = "10px";
    delButton.style.textAlign = "center";
    return delButton;
}

function display(data) {
    //console.log(data);
    data.forEach(function (e) {
        const divItems = createItems();
        ITEMS.appendChild(divItems);
        var itemClass= document.getElementsByClassName("itemID")
        //console.log(divItems);
        const text = createTitle(e.description);
        const cButton = createComButton();
        const dButton = createDelButton();
        itemClass[index].appendChild(text);
        itemClass[index].appendChild(cButton);
        itemClass[index].appendChild(dButton);
        index++;
      //console.log(text);
    });
  }


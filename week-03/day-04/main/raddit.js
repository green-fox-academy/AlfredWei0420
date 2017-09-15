'use strict';

const NEWS_CONTAINER = document.getElementById("container");
const API_BASE_URL = 'https://time-radish.glitch.me/posts';
//const TITLE = 'messages';
var index = 0;
var number = 1;

window.addEventListener('load', function () {
    fetch(API_BASE_URL)
    .then(parseResponse)
    .then(collectPost)
    .then(displayTitle) 
  })


function parseResponse(response){
    //console.log(response.json());
    return response.json();
}

function collectPost(data){
    return data.posts.map(function(e){
        return e;
    });
}

function creatNews(){
    var newsClass = document.createElement("div");
    newsClass.className="news";
    newsClass.style.height = "70px";
    newsClass.style.width = "atuo";
    newsClass.style.position= "relative";
    return newsClass;
}

function createNumber(number){
    var numClass = document.createElement("div");
    numClass.setAttribute("class","number");
    numClass.innerHTML = number;
    numClass.style.color = "#d1cdca";
    numClass.style.fontSize = "20px";
    numClass.style.float = "left";
    numClass.style.position = "absolute";
    numClass.style.top = "19px";
    numClass.style.left = "15px";
    return numClass;
}

function createVote(score){
    var voteClass = document.createElement("div");
    voteClass.setAttribute("class","vote");
    voteClass.innerHTML = score;
    voteClass.style.width = "45px";
    voteClass.style.color = "#b7b7b7";
    voteClass.style.fontSize = "15px";
    voteClass.style.float = "left";
    voteClass.style.position = "relative";
    voteClass.style.textAlign = "center";
    voteClass.style.top = "23px";
    voteClass.style.left = "42px";
    return voteClass;
}

function createUp(){
    var upClass = document.createElement("div");
    upClass.setAttribute("class","up");
    upClass.style.width = "30px";
    upClass.style.height = "30px";
    upClass.style.position = "relative";
    upClass.style.left = "3px";
    upClass.style.float = "left";
    upClass.style.backgroundImage = "url('./arrow/upvote.png')"; 
    upClass.style.backgroundImage = "no-repeat";
    upClass.style.backgroundImage = "center";
    return upClass;
}

function createDown(){
    var downClass = document.createElement("div");
    downClass.setAttribute("class","down");
    downClass.style.width = "30px";
    downClass.style.height = "30px";
    downClass.style.position = "relative";
    downClass.style.top = "40px";
    downClass.style.left = "-27px";
    downClass.style.float = "left";
    downClass.style.backgroundImage = "url('./arrow/downvote.png')"; 
    downClass.style.backgroundImage = "no-repeat";
    downClass.style.backgroundImage = "center";
    return downClass;
}

function createTitle(title){
    const titleText = document.createElement("p");
    titleText.setAttribute("class", "text");
    titleText.innerHTML=title;
    titleText.style.fontSize = "28px";
    titleText.style.color = "blue";
    titleText.style.position = "absolute";
    titleText.style.top = "-28px";
    titleText.style.left = "94px";
    titleText.style.float = "left";
    return titleText;
}

function createTime(timeStamp,owner){
    const timeClass = document.createElement("p");
    timeClass.setAttribute("class", "time");
    timeClass.innerHTML="submitted"+" "+timeStamp+" "+"ago"+" "+"by"+" "+owner;
    timeClass.style.color = "#9eb2cd";
    timeClass.style.position = "relative";
    timeClass.style.top = "8px";
    timeClass.style.left = "100px";
    return timeClass;
}

function createModify(){
    const modifyClass = document.createElement("p");
    modifyClass.setAttribute("class", "modify");
    modifyClass.innerHTML="modify";
    modifyClass.style.clear = "both";
    modifyClass.style.color = "#8f9194";
    modifyClass.style.fontWeight = "bold";
    modifyClass.style.fontSize = "12px";
    modifyClass.style.position = "relative";
    modifyClass.style.top = "-2px";
    modifyClass.style.left = "102px";
    return modifyClass;
}

function createRemove(){
    const removeClass = document.createElement("p");
    removeClass.setAttribute("class", "remove");
    removeClass.innerHTML="remove";
    removeClass.style.clear = "both";
    removeClass.style.color = "#8f9194";
    removeClass.style.fontWeight = "bold";
    removeClass.style.fontSize = "12px";
    removeClass.style.position = "relative";
    removeClass.style.top = "-30px";
    removeClass.style.left = "160px"
    return removeClass;
}
function displayTitle(infoPosts) {
    console.log(infoPosts);
    infoPosts.forEach(function (e) {
        const divClass = creatNews();
        NEWS_CONTAINER.appendChild(divClass);
        var newsClass= document.getElementsByClassName("news")
        //console.log(newsClass);
        const num = createNumber(number);
        const vote = createVote(e.score);
        const up = createUp();
        const down = createDown();
        const text = createTitle(e.title);
        const time = createTime(e.timestamp,e.owner);
        const modify = createModify();
        const remove = createRemove();
        newsClass[index].appendChild(num);
        newsClass[index].appendChild(vote);
        newsClass[index].appendChild(up);
        newsClass[index].appendChild(down);
        newsClass[index].appendChild(text);
        newsClass[index].appendChild(time);
        newsClass[index].appendChild(modify);
        newsClass[index].appendChild(remove);
        index++;
        number++;
      //console.log(text);
      //console NEWS_LIST[0].appendChild(text).log(NEWS_LIST);
    });
  }


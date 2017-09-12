'use strict';

window.onload=function() {
    backendRequest();
    var button = document.querySelectorAll("button");
    button[0].addEventListener("click",function(event){
        Url.page=1;
        //info.removeChild(info.childNodes[]);
        backendRequest();
    })
     //not use the button number it could be changed for different alignment
    button[1].addEventListener("click",function(event){
        if (Url.page === 0) {
            Url.page = 1;
        }else{
            Url.page -= Url.page;  
        }
        //info.removeChild(info.childNodes[0]);
        clear();
        backendRequest();
    })
    button[2].addEventListener("click",function(event){
        if (Url.page === 214) {
            Url.page = 214;
        }else{
            Url.page += Url.page;  
        }
        //info.removeChild(info.childNodes[]);
        backendRequest();
    })
    button[3].addEventListener("click",function(event){
        Url.page=214;
        //info.removeChild(info.childNodes[]);
        backendRequest();
    })//display();
}

function backendRequest() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        console.log('readyState changed');
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
            var data = JSON.parse(xhr.response);
           // console.log(data);
           // clear();
            display(data);
        }
    }//add lisener before send request always
    xhr.open('GET', Url.path + Url.page + Url.pageSize);
    xhr.send(null);
  
}

var Url={
    path:"https://www.anapioficeandfire.com/api/characters?page=",
    page:1,
    pageSize:"&pageSize=10"
}

function display(data){
    clear();
    var info = document.querySelector(".infoDisplay")
    //console.log(button);
    var pText = data.forEach(function(e,i) {
        pText = document.createElement('p');
        pText.innerHTML = i+1 + " " + "name: " + e.name + "gender: " + e.gender;//innerText is more scecur
        pText.setAttribute("font-size", 20);//not work  fontSize is not attribute  use style.fontSize
        pText.setAttribute("color", "black");
        info.appendChild(pText);
    });
};

function clear(){
    var pList = document.querySelector(".infoDisplay");
    while (pList.firstChild) {
        pList.removeChild(pList.firstChild);
    }
    
}


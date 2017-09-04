'use strict';

var imgLinks = ["./image/1.jpg","./image/2.jpg","./image/3.jpg",
"./image/4.jpg","./image/5.jpg","./image/6.jpg"]
var h1Text=["A Fox Story","A Cat Story","A Lion Story","A Mouse Story","An Old driver","A Wolf Story" ]
var pText=["I`m a Fox with stories","I`m a Cat with stories","I`m a Lion with stories","I`m a Mouse with stories",
"I`m an old driver","I`m a wolf with stories"];
var leftButton = document.querySelector(".left");
var rightButton = document.querySelector(".right");
var photoImage = document.querySelector(".photos")
var h1Cap = document.querySelector("h1")
var pCap = document.querySelector("p")
var picClick = document.querySelectorAll(".pic")

//console.dir(photoImage);
console.log(picClick);
console.log(leftButton);
var num=0;


function rightClick(){
    //imgLinks.forEach(function (links) {
     //   photoImage.
    //}) try this later
    if (num!=imgLinks.length-1) {
        photoImage.src=imgLinks[num+1];
        h1Cap.innerHTML=h1Text[num+1];
        pCap.innerText=pText[num+1];
        num++;
    }else{
        photoImage.src=imgLinks[0];
        h1Cap.innerHTML=h1Text[0];
        pCap.innerText=pText[0];
        num=0;
    }
}

function leftClick(){
    if (num!=0) {
        photoImage.src=imgLinks[num-1];
        h1Cap.innerHTML=h1Text[num-1];
        pCap.innerText=pText[num-1];
        num--;
    }else{
        photoImage.src=imgLinks[imgLinks.length-1];
        h1Cap.innerHTML=h1Text[imgLinks.length-1];
        pCap.innerText=pText[imgLinks.length-1];
        num=imgLinks.length-1;
    }
}

function imgClick(event){
    for (var i = 0; i < picClick.length; i++) {
        picClick[i].onmouseover = function() {
            this.style.cursor='hand';
            //this.style.border = 3px "blue";
        }   
    }
    event = event;
    var targetElement = event.target || event.srcElement;
    //make sure click on out of thumbnail image the pic will not change
    if (targetElement.tagName == "IMG") {
        photoImage.src=targetElement.getAttribute("src");
        for (var i = 0; i < imgLinks.length; i++) {
            if(targetElement.getAttribute("src")==imgLinks[i]){
                h1Cap.innerHTML=h1Text[i];
                pCap.innerText=pText[i];
                num=i;
            }
            
        }
        
    }    
}

rightButton.addEventListener('click', rightClick);
leftButton.addEventListener('click', leftClick);
//check if the addEventListener is vailid for img
//picClick.onclick=imgClick; 
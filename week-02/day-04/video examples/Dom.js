//return the elements with class called "content"
document.getElementsByClassName("content");

//storing that array in "myContentDivs"
var myContentDivs = document.getElementsByClassName("content");

// call this array
myContentDivs

//grab the tags of h2 in array and store it
var myH2 = myContentDivs[1].getElementsByTagName("h2");

//call this array
myH2

//change the content in to "YO NINJAS"
myH2[0].innerHTML = "YO NINJAS";

//get "element" by ID(only one on each document)
document.getElementById("page-title");

/*querySelector()--------------------------------------------------------------------------------------*/
//use google.com as demo

//use for grab things
var footerBar = document.querySelector('.fbar');
footerBar

var footerBarItems = footerBar.querySelectorAll('._Gs');
footerBarItems

//use canniuse.com search queryselector & queryselectorAll


/*changing page content------------------------------------netninja.co.uk as example---------------------*/
var myBody = document.getElementsByTagName('body');//try single quotation marks works or not
myBody[0].innerHTML;

//change the <p> section
myBody[0].innerHTML= "<p>I am a paragrah tag</p>";

//get title and change it
var myTitle = document.getElementById("page-title");

myTitle.textContent;
myTitle.textContent = "YO NINJAS GET READY TO LEARN!";

//  summary 1. get the element u want 2.use the method to change the innerhtml or textcontent properties.

/*changing elements attributes------------------------------------netninja.co.uk as example---------------------*/
//modify a <a> with id = "test" and class = "ninja" first
var link = document.getElementById("text");

//get attributies
link.getAttribute("href");
link.getAttribute("class");

//set the attributies
link.setAttribute("class","pie");
//set an new attributes
link.setAttribute("alt","hello");

//get the class name
link.className;
//set the class name
link.className = "ninja";
//call attibuties
link.href;
link.style;

/*changing CSS styles------------------------------------netninja.co.uk as example---------------------*/
var title = document.getElementById("page-title");

//overwritten not work
title.setAttribute("style","position:relative;");
title.setAttribute("style","left: 10px;");

//correct format
title.setAttribute("style","position:relative; left: 10px;");

//use the style property directly
title.style.left ="20px";
title.style.top = "10px";
title.style.color = "red";
title.style.backgroundColor = "blue";

/*Adding elements to the Dom------------------------------------netninja.co.uk as example---------------------*/
//1.creating element in JS 2.take that element and push it to HTML where we want to do 

//create element
var newLi = document.createElement("Li");
var newA = document.createElement("A");

//get the id from 0th element
var menu =  document.getElementById("main-nav").getElementsByTagName("ul")[0];
//add element
menu.appendChild(newLi);
newLi.appendChild(newA);
newA.innerHTML = "Blog";

//insert before 0th 
menu.insertBefore(newLi,menu.getElementsByTagName("li")[0]);

/*Remove elements to the Dom------------------------------------netninja.co.uk as example---------------------*/
//1.grab element we want remove store to varibles

var parent = document.getElementById("main-nav").getElementsByTagName("ul")[0];

var child = parent.getElementsByTagName("li")[0];

//2.call the method to remove
//store in to varible
var removed = parent.removeChild(child);
//can be re-insert
parent.appendChild(removed);


/*Event lisener---------------------------------------------------------------use jQuery---------------------*/
//use MDN webpage try the code


/* window onload Event ----------------------------------------------------------use jQuery---------------------*/
// when the browser fully loadded all so all HTML tags have been loaded in then fire this function else do nothing

//method 1
window.onload = function () {    
}

//method 2

function setUpEvents(){   
     
}
window.onload = function () {   
    setUpEvents(); 
}


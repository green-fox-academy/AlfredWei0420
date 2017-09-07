window.onload=function() {
    backendRequest();
    //display();
}
function backendRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', Url.path + Url.page + Url.pageSize);
    xhr.send(null);
    xhr.onreadystatechange = function(){
        console.log('readyState changed');
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
            var data = JSON.parse(xhr.response);
           // console.log(data);
           // clear();
            display(data);
        }
    }
}

var Url={
    path:"https://www.anapioficeandfire.com/api/characters?page=",
    page:1,
    pageSize:"&pageSize=10"
}

function display(data){
    var button = document.querySelectorAll("button");
    var info = document.querySelector(".infoDisplay")
    //console.log(button);
    var pText = data.map(function(e,i){
        pText = document.createElement('p');
        pText.innerHTML = i+1 + " " + "name: " + e.name + "gender: " + e.gender;
        pText.setAttribute("font-size", 20);
        pText.setAttribute("color", "black");
        info.appendChild(pText);
    });
    
    button[0].addEventListener("click",function(event){
        Url.page=1;
        //info.removeChild(info.childNodes[]);
        backendRequest();
    })
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
    })
};

function clear(){
    var pList = document.querySelectorAll("p");
    while (pList.firstChild) {
        pList.removeChild(pList.firstChild);
    }
    
}


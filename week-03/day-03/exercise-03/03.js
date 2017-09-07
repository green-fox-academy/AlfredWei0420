
const xhr = new XMLHttpRequest();
//var data;

xhr.onreadystatechange = function(){
    console.log('readyState changed');
    if(xhr.readyState ===XMLHttpRequest.DONE && xhr.status === 200){
        var data = JSON.parse(xhr.response).messages;
        console.log(data);
    }
}

xhr.open('GET',"https://wakeful-vision.glitch.me/api/messages/");
xhr.send(null);

var urlObject={
    path:"https://wakeful-vision.glitch.me/",
    
}



console.log(xhr);
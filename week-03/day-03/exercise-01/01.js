const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
	console.log('readyState changed');
	if (xhr.readyState === XMLHttpRequest.DONE){
       var data = JSON.parse(xhr.response).data;
        console.log(JSON.parse(xhr.response));
       // console.log(data); 
        thumbnailsDisplay(data);
}
}


xhr.open('GET','http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=2128789aefe34d1bb86086a95ffcbab4&limit=16',true);
xhr.send(null);

console.log(xhr);

function thumbnailsDisplay(data) {
    var thumbnails = document.querySelector('.thumbnails');
    var picture = document.querySelector(".picture");
    var pic = document.createElement("img");  
    pic.setAttribute("src", "https://media3.giphy.com/media/adgrnRDPVTIre/giphy.gif");
    pic.style.position = "relative";
    pic.style.top = "10%";
    picture.appendChild(pic);
    var count = 1;
    //map will return the value 
    var img = data.forEach(function(e) {
        img = document.createElement("img");
        img.setAttribute("src", e.images.downsized_still.url);
        img.setAttribute("data-large-url", e.images.downsized_large.url);
        img.setAttribute("id", e.id);
        img.setAttribute("height", 100);
        img.setAttribute("width",100);
        thumbnails.appendChild(img);
        //console.log(img);
    });
    thumbnails.addEventListener('click', function(event) {
            if(count % 2 === 0) {
                pic.src = event.target.getAttribute('data-large-url');
                count++;
            } else {
                pic.src = event.target.src;
                //console.log(e.id);
                count++;
            }
    });
}

/*Delayed Click
Create a simple HTML document with one button. 
If the user clicks the button it should wait 2 seconds 
and it should show a text under the button: 2 seconds elapsed */

var button = ["Click me"].map(function(buttonText){
    var buttonElement;
    buttonElement = document.createElement('button');
    buttonElement.appendChild(document.createTextNode(buttonText));
    return buttonElement;
});

function appendButtons() {
    var pText =" 2 seconds elapsed";
    button.forEach(function(e,i){
        button[i].addEventListener('click', function() {
            var p = document.createElement("p");
            setTimeout(function() {
                document.body.appendChild(p);
                p.innerText=pText;
            }, 2000);
            
      });
      document.body.appendChild(button[i]);
    })
};

window.addEventListener('load', appendButtons);
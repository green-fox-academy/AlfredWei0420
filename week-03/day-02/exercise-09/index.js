/*Delayed Click
Create a simple HTML document with one button. 
If the user clicks the button 3 times, and 5 seconds is already elapsed since the page is loaded, 
a text should appear under the button: 5 seconds elapsed and clicked 3 times */

var button = ["Click me"].map(function(buttonText){
    var buttonElement;
    buttonElement = document.createElement('button');
    buttonElement.appendChild(document.createTextNode(buttonText));
    return buttonElement;
});

function appendButtons() {
    var pText ="  5 seconds elapsed and clicked 3 times";
    var count = 0;
    var second = 0;
    button.forEach(function(e,i){
        button[i].addEventListener('click', function() {
            count++;
            console.log(count);
            setTimeout(function() {
                second=5;
            }, 5000);
            console.log(second);
            if (count>=3&&second===5) {
              var p = document.createElement("p");
              document.body.appendChild(p);
              p.innerText=pText;
            }
      });
      document.body.appendChild(button[i]);
    })
};

window.addEventListener('load', appendButtons);
/*Gather 10.000 candies!
Clicking the ‘Create candies’ button gives you 1 candy.
You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
10 lollipops generate 1 candy per second.
Use the 🍭 emoji to display the lollipops you have
Display the candy production rate in the Candies / Second row
If you press the "make candy rain" button, the candy generation should speed up 10x*/

var times = 1;
var numLolly=3;
var numCandies=0;

function createCandies(){
    var createButton = document.querySelector(".create-candies");
    var total = document.querySelector(".candies");
    var createNum = 0;
    createButton.addEventListener('click', function(){
        createNum ++;
        total.innerHTML=createNum;
        console.log(createNum);
    });
    return createNum*times;
}

function buyLollypops(){
    var buyLollypopsButton = document.querySelector(".buy-lollypops");
    createButton.addEventListener('click', function(){
        if (numLolly>0) {
            numLolly -=numLolly;
            numCandies = numCandies+100;
        }else {
            console.log("not enough lollypops!")
        }
    });
    return numLolly;
}

function candyRain(){
    var candyRainButton= document.querySelector(".candy-machine");
}




window.addEventListener('load', createCandies);
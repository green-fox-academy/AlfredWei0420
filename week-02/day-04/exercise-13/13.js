var king = document.querySelector('#b325');
console.log(king.innerHTML);

var conceited = document.querySelector(".b326")
alert(conceited.innerHTML);

var businessLamp = document.querySelectorAll(".big")
businessLamp.forEach(function (e) {
    console.log(e.innerHTML);
})

var conceitedKing = document.querySelectorAll('.container div')

conceitedKing.forEach(function (e) {
    alert(e.innerHTML);
})

var noBusiness = document.querySelectorAll('div')
noBusiness.forEach(function (e) {
    console.log(e.innerHTML);
})

var allBizniss = document.querySelectorAll('p')
allBizniss.forEach(function (e) {
    alert(e.innerHTML);
});
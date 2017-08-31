'use strict';
// Add "e" to every string in far

var far = ["appl", "fiddl", "Bruce Le", "hom"];

far.forEach(function (element,i) {
    far[i]=element+"e";
    console.log(far[i]);
});


for(var i=0;i<far.length;i++){
    far[i]=far[i]+"e";
}
console.log(far);
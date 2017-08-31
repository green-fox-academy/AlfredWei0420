'use strict';
// Join the two array by matching one girl with one boy in the order array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

var girls = ["Eve","Ashley","Bözsi","Kat","Jane"];
var boys = ["Joe","Fred","Béla","Todd","Neef","Jeff"];
var order = [];

if(girls.length<boys.length){
    for(var i=0;i<boys.length;i++){
        order.push(girls[i]);
        order.push(boys[i]);
}}else {
    for(var i=0;i<girls.length;i++){
        order.push(girls[i]);
        order.push(boys[i]);
}
    order=order.filter(order[i]==undefined);
}

console.log(order);

//need modify filter
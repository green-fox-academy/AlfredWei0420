'use strict';

var fruits = [
  'melon',
  'apple',
  'strawberry',
  'blueberry',
  'pear',
  'banana'
];

// Create a new array of consists numbers that shows how many times the 'e' letter
// occurs in the word stored under the same index at the fruits array!
// Please use the map method.
var num = 0;
var eFruits = [];
let count = fruits.map(function(e,i){
  var str = e.split('');
  str.forEach(function(element) {
    if(element==="e"){
      num++;
    }
  }, this);
  return eFruits;
})

console.log(num);
console.log(eFruits);
'use strict';
// Saturn is missing from the planetList
// Insert it into the correct position
// bonus for using some built in methods

var planetList = ["Mercury","Venus","Earth","Mars","Jupiter","Uranus","Neptune"];

function insert(number) {
    var array = planetList.slice(0,number);
    array.push("Saturn");
    array=array.concat(planetList.slice(number,planetList.length));
    return array;
   };

console.log(insert(3));
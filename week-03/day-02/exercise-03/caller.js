'use strict';

// Implement the selectLastEvenNumber function that takes an array and callback,
// it should call the callback immediately with the last even number on the array


function printNumber(num) {
  console.log(num);
}

function selectLastEvenNumber(array,printNumber){
    var newArr = [];
    array.forEach(function(e) {
        if (e%2===0) {
            newArr.push(e);
        }
    }, this);
    return newArr[newArr.length-1];
}

selectLastEvenNumber([2, 5, 7, 8, 9, 11], printNumber); // should print 8
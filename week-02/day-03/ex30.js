'use strict';

// - Create a variable named `aj`
//   with the following content: `[3, 4, 5, 6, 7]`
// - Reverse the order of the elements in `aj`
// 		- do it with the built in method
//		- do it with creating a new temp array and a loop
// - Print the elements of the reversed `aj`

var aj = [3, 4, 5, 6, 7];
reArray1=aj.reverse();
console.log(reArray1);

function rearrange(array) {
    var temp=[];
    for (var i = 0; i < array.length; i++) {
       temp[i]=array[array.length-i-1];
    }
    console.log(temp);
}

rearrange(aj);



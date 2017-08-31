'use strict';

// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

function matrix(number) {
    var element = number-1;
    var TDarray = [];
    TDarray.length=number;
    for (var i = 0; i <= number; i++) {
        if(element>=0){
            TDarray.fill(0,0,number);
            TDarray[element] = 1;
            element = element-1;
            console.log(TDarray); 
        }       
    }
}

matrix(4);
matrix(5);
//not finished
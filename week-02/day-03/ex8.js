'use strict';

var lineCount = 7;



// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is
for(var i=0;i<lineCount;i++){
    var star = '*';
    var space = ' ';
    if (i<lineCount/2) {
        star = star.repeat(2*i+1);
        space = space.repeat(lineCount-i);
    }else{
        star = star.repeat(2*i-1);
        space = space.repeat(lineCount+1);
    }
    console.log(space+star);
}

//not finish
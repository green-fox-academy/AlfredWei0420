'use strict';

var lineCount = 7;
var numStar= 1;
var numSpace = (lineCount+1)/2;
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
for(var i=1;i<=lineCount;i++){
    var star = '*';
    var space = ' ';
    if (i<lineCount/2) {
        star = star.repeat(numStar);
        space = space.repeat(numSpace);
        numStar = numStar+2;
        numSpace=numSpace-1;
    }else{
        star = star.repeat(numStar);
        space = space.repeat(numSpace);
        numStar=numStar-2;
        numSpace = numSpace+1;
    }
    console.log(space+star);
}


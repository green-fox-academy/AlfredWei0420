'use strict';

var lineCount = 4;

// Write a program that draws a
// pyramid like this:
//
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is


for(var i=0;i<lineCount;i++){
    var star = '*';
    star = star.repeat(2*i+1);
    var space = ' ';
    space = space.repeat(lineCount-i);
    console.log(space+star);
}
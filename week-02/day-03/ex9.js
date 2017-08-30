'use strict';

var lineCount = 6;

// Write a program that draws a
// square like this:
//
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

function drawSqure(lines){
    var symbol = '%';
    var space = ' ';
    for (var i = 1; i <= lines; i++) {
        if (i===1 || i===lines) {
            console.log(symbol.repeat(lines));
        }else{
            console.log(symbol+space.repeat(lines-2)+symbol);
        }        
    }
}

drawSqure(lineCount);
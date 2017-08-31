'use strict';

var lineCount = 6;
var Lspace = 0;

// Write a program that draws a
// square like this:
//
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is

function diagonal(lines){
    var symbol = '%';
    var space = ' ';
    for (var i = 1; i <= lines; i++) {
        if (i===1 || i===lines) {
            console.log(symbol.repeat(lines));
        }else{
            console.log(symbol+space.repeat(Lspace)+symbol+space.repeat(lines-3-Lspace)+symbol);
            Lspace=Lspace+1;
        }        
    }
}

diagonal(lineCount);
diagonal(8);

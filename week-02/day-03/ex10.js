'use strict';

var lineCount = 6;


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
            for(var j = 1;j<=lines;j++){
                sArray=sArray.concat(symbol);
            }
            console.log(symbol.repeat(lines));
        }else{
            console.log(symbol+space.repeat(lines-2)+symbol);
        }        
    }
}

diagonal(lineCount);
//not finished
// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % % 
//  % % % %
//

var lineCount = 8;

function chessTable(lines){
    var symbol = '%';
    var space = ' ';
    for (var i = 1; i <= lines; i++) {
        if (i%2===1) {
            console.log(symbol.repeat(4));
        }else{
            console.log(space+symbol.repeat(4));
        }        
    }
}

chessTable(lineCount);
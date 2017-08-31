'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

var todoText = " - Buy milk\n";
var list1 = "my todo:\n";
var list2 = " - Download games\n";
var list3 = "     - Diablo\n";

var todoText = todoText.slice(0,0)+list1+todoText+list2+list3;

console.log(todoText);
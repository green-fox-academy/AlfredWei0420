'use strict';

var a = [1, 2, 3];
var b = [2, 3, 4];

function difference(a, b) {
  var result = [];
  for (var i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) === -1) {
      result.push(a[i]);
    }
  }
  return result;
}

difference(a,b);
'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

var length = 2.232;
var width = 4.4343;
var height = 3.232;

console.log('Surface Area:'+((length*width+height*width+length*height)*2).toFixed(2));
console.log('Volume:'+(length*width*height).toFixed(2));
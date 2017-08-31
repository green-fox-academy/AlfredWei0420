'use strict';

// An attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

var workdays = 5;
console.log('Total hours spend in this semester are '+(6*workdays*17)+' hours');
console.log('percentage of the coding hours in the semester is '+(6*workdays/52*100).toFixed(2)+'%');
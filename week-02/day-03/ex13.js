'use strict';

// - Create variable named `al` and assign the value `EPAM` to it
// - Create a function called `greet` that greets it's input parameter
//     - Greeting is printing e.g. `Greetings, dear EPAM`
//     - Prepare for the special case when no parameters are given
// - Greet `al`

var al = 'EPAM';
var a='sss';
function greet(username) {
    if (username) {
        console.log('Greeting, dear '+username);
    }else{
        console.log('Greeting, dear '+al);
    }
}

greet(a);
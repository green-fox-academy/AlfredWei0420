'use strict';

// - Create a function called `factorio`
//   that returns it's input's factorial

function factorio(number) {
    var fac = 1;
    for(var i=1;i<=number;i++){
        fac=fac*i;
    }
    console.log(fac);
}

factorio(4);
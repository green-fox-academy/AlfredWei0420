'use strict';

var shop_items = ["Cupcake", 2, "Brownie", false]

// Accidentally we added "2" and "false" to the array. 
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)

shop_items.forEach(function (e,i) {
    if (e===2) {
        shop_items[i]="Croissant";
    }else if (e==false) {
        shop_items[i]="Ice Cream";
    }
});
console.log(shop_items);




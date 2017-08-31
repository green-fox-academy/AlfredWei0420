'use strict';

var accounts = [
	{ 'client_name': 'Igor', 'account_number': 11234543, 'balance': 203004099.2 },
	{ 'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 5204100071.23 },
	{ 'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1353600.0 }
]

// Create function that returns the name and balance of cash on an account

// Create function that transfers an balance of cash from one account to another
// it should have three parameters:
//  - from account_number
//  - to account_number
//  - balance
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

function info(num) {
    //use for loop&beark try it later
    accounts.forEach(function(e) {
        if(num===e.account_number){
            console.log(e.client_name+e.balance);
            //break;
        }else {
            console.log("404 - account not found");
        }
    }, this);
}
console.log(info(1));

function transfer(fromAcc,toAcc,balance) {
    account.forEach(function (e) {
        if(fromAcc==e.account_number&&toAcc==e.account_number){}

    })
}
//not finished
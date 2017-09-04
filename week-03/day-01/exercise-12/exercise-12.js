/*Rocket

Create a Rocket class.
It should take 3 parameters in its constructor
1st parameter: the type of the rocket as a string, "falcon1" or "falcon9".
2nd parameter: the starting fuel level as a number, defaults to 0.
3rd parameter: number of launches as a number, defaults to 0.
It should have 3 methods:
launch()
it should use 1 fuel if it's a falcon1 and 9 fuels if it's a falcon9.
it should increment the launches by one if it had enough fuel for the launch.
refill()
it should refill the rocket's fuel level to 5 if falcon1 and to 20 if falcon9.
it should return the amount of fuel used for the refill.
example: if the rocket is a falcon1 and has fuel level 3, then it should return 2.
getStats()
it should return its stats as a string like: "name: falcon9, fuel: 11, launches: 1"
*/
var Rocket =function(type,fuelLevel,launchNumber){
    this.type=type;
    this.fuelLevel=fuelLevel||0;
    this.launchNumber||0;
    //not a complete function
    this.launch =function () {
        if(this.type=="falcon1"){
            this.fuelLevel -= this.fuelLevel;
            launchNumber++;
        }else {
            this.fuelLevel = this.fuelLevel-9;
            launchNumber++;
        };
        return launchNumber;
        console.log(launchNumber);
    };
    this.refill = function(){
        var amountFuel=0;
        if(type=="falcon1"){
            amountFuel=5-fuelLevel;
        }else {
            amountFuel=20-fuelLevel;
        };
        return amountFuel;
        console.log(amountFuel);
    };
    this.getStats = function(){
        return ("name: "+this.type+"fuel: "+this.fuelLevel+"launches: "+this.launchNumber)
    }
}
var falcon1 = new Rocket('falcon1')
var returned_falcon9 = Rocket('falcon9', 11, 1)

falcon1.refill() // 5
falcon1.launch()
//console.log(falcon1.getStats()) // name: falcon1, fuel: 4, launches: 1
//console.log(returned_falcon9.getStats()) // name: falcon9, fuel: 11, launches: 1
/*
SpaceX

Create a SpaceX class.
it should take 1 parameter in its constructor: the stored fuel
it should have 4 methods:
addRocket(rocket)
it should add a new rocket to SpaceX that is given in its first parameter
use the rockets from the fourth exercise.
refillAll()
it should refill all of its rockets with fuel and subtract the needed fuel from the storage
launchAll()
it should launch all the rockets
buyFuel(amount)
it should increase stored fuel by amount
getStats()
it should return its stats as a sting like: "rockets: 3, fuel: 100, launches: 1"*/

var SpaceX = function(storedFuel){
    this.storedFuel=storedFuel;
    this.addRocket = function(type,fuelLevel,launchNumber){
        var object={
            type:type,
            fuelLevel:fuelLevel,
            launchNumber:launchNumber
        }
        this.storedFuel.push(object);
    };
    this.refillAll = function(){

    };
    this.launchAll=function(){

    };
    this.buyFuel = function(){

    };
    this.getStats=function(){
        return ("rockets: "+this.storedFuel.length+1+"fuel :"+this.storedFuel.fuelLevel+"launches :"+this.storedFuel.launchNumber)
    }
};
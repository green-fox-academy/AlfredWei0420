'use strict';

// Create a constructor called PirateHorde, that takes an array of pirates as a parameter:
// It should have an "addPirate" method that adds a pirate object to it's list
// It should have a "getSumGold" method that returns the sum of all pirates gold
// It should have a "getLongestName" method that returns the name of the pirate that has the longest
// It should have a "getTheWoodenLegNames" method that retuns the names of the pirates that has wooden leg




var pirates = [
  {name: 'Jack', gold: 4, hasWoodenLeg: true},
  {name: 'Bob', gold: 0, hasWoodenLeg: false},
  {name: 'Olaf', gold: 3, hasWoodenLeg: true},
  {name: 'Steve', gold: 2, hasWoodenLeg: true},
  {name: 'Ian', gold: 10, hasWoodenLeg: false},
];

var PirateHorde = function(pirates){
  this.pirates=pirates;
  this.addPirate = function(name,gold,hasWoodenLeg){
    var object={
      name:name,
      gold:gold,
      hasWoodenLeg:hasWoodenLeg
    };
    this.pirates.push(object);
  };
  this.getSumGold = function(){
    var sum = 0;
    this.pirates.forEach(function(e) {
      sum += e.gold;
    });
    return sum;
  };
  this.getLongestName = function () {
    this.pirates.forEach(function (e,i) {
      var name = this.pirate[i].name;
      var namelength = name.length;
      var x = 0;
      if(name.length>x){
        x=length;
      };
      return name;
    });
  };
  this.getTheWoodenLegNames = function(){
    var woodenName = [];
    this.pirates.forEach(function(e){
      if(e.hasWoodenLeg){
        woodenName.push(e.hasWoodenLeg);
      };
      return woodenName.join(",");
    })
  };
};

var pirateHorde = new PirateHorde(pirates);

pirateHorde.addPirate('Greg', 6, true);
console.log(pirates);
console.log(pirateHorde.getSumGold()); // 25
//console.log(pirateHorde.getLongestName()); // 'Steve'
console.log(pirateHorde.getTheWoodenLegNames()); // ['Jack', 'Olaf', 'Steve', 'Greg']
'use strict';

// Create a constructor called CarStore, that takes an array of cars as a parameter:
// It should have an "addCar" method that adds a car object to it's list
// It should have a "getSumPrice" method that returns the sum of all cars price
// It should have a "getOldestCarType" method that returns the oldest car's type
// It should have a "deleteCarByType" method that removes the cars from the inner list
// that have the given type

var cars = [
  {type: 'Dodge', price: 20000, year: 2012},
  {type: 'Tesla', price: 30000, year: 2015},
  {type: 'Nissan', price: 12000, year: 2010},
  {type: 'Trabant', price: 2000, year: 1980},
  {type: 'Ferrari', price: 40000, year: 2001}
];

var CarStore = function(cars){
  this.cars = cars;
  this.addCar = function (type,price,year) {
    var object = {
      type:type,
      price:price,
      year:year
    };
    this.cars.push(object);   
  };
  this.getSumPrice = function(){
    var sum = 0;
    this.cars.forEach(function(e) {
      sum += e.price;
    }, this);
    return sum;
  };
  this.getOldestCarType = function(){
    var oldYear = this.cars[0].year;
    var oldType;
    this.cars.forEach(function(e){
      if (e.year<oldYear) {
        oldYear = e.year;
        oldType = e.type;
      }
    });
    return oldType
  };
 this.deleteCarByType = function(carType){
   /*this.cars.forEach(function(e,i){
   if(carType== e.type){
    this.cars = this.cars.splice(i,1);
  };
  });*/
  for(var i =0;i<this.cars.length;i++){
    if(carType==this.cars[i].type){
      cars = this.cars.splice(i,1);
   }
  }
   return cars;
 };
};

var carStore = new CarStore(cars);

carStore.addCar('Smart', 18000, 2011);
console.log(carStore.getSumPrice()); // 122000
console.log(carStore.getOldestCarType()); // 'Trabant'
carStore.deleteCarByType('Ferrari');
console.log(carStore.getSumPrice()); // 82000
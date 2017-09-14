function getAverageAge(list) {
    var avg;
    var sum = 0;
    list.forEach(function(e) {
        sum += e.age;
    }, this);
     avg = Math.round(sum/(list.length));
     return avg;
      // thank you for checking out the Coding Meetup kata :)
}


var list1 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];

var a = getAverageAge(list1);

console.log(a);

function getFirstPython(list) {
    // Thank you for checking out my kata :)
    // list.forEach(function (e) {
    //   if(e.language === "Python"){
    //     return e.firstName + "," +" "+ e.country;
    //   }else {
    //     return "There will be no Python developers";
    //   }
    // })
    for (var i=0;i<list.length;i++){
        if(list[i].language === "Python"){
        return list[i].firstName + "," +" "+ list[i].country;
      }else {
        return "There will be no Python developers";
      }
    }
  }

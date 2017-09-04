var falcon1 = new Rocket('falcon1')
var returned_falcon9 = Rocket('falcon9', 11, 1)

falcon1.refill() // 5
falcon1.launch()

console.log(falcon1.getStats()) // name: falcon1, fuel: 4, launches: 1
console.log(returned_falcon9.getStats()) // name: falcon9, fuel: 11, launches: 1
var space_x = new SpaceX(100)
var falcon1 = new Rocket('falcon1', 0, 0)
var falcon9 = new Rocket('falcon9', 0, 0)
var returned_falcon9 = new Rocket('falcon9', 11, 1)

console.log(returned_falcon9.getStats()) // name: falcon9, fuel: 11

space_x.addRocket(falcon1)
space_x.addRocket(falcon9)
space_x.addRocket(returned_falcon9)

console.log(space_x.getStats()) // rockets: 3, fuel: 100, launches: 1
space_x.refill_all()
console.log(space_x.getStats()) // rockets: 3, fuel: 66, launches: 1
space_x.launch_all()
console.log(space_x.getStats()) // rockets: 3, fuel: 66, launches: 4
space_x.buy_fuel(50)
console.log(space_x.getStats()) // rockets: 3, fuel: 116, launches: 4
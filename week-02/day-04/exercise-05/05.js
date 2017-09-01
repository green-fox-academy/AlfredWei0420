var girls = ["Eve","Ashley","Bözsi","Kat","Jane"];
var boys = ["Joe","Fred","Béla","Todd","Neef","Jeff"];
var order = [];

if(girls.length<boys.length){
    for(var i=0;i<boys.length;i++){
        order.push(girls[i]);
        order.push(boys[i]);
}}else {
    for(var i=0;i<girls.length;i++){
        order.push(girls[i]);
        order.push(boys[i]);
}
}
order=order.slice(0,order.length-1)+
order.slice(order.length-1,order.length);

order = order.split(',');
console.log(order);

//need modify filter
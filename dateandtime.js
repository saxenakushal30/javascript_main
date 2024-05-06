// Dates
let myDate = new Date()//object of date
console.log(myDate.toString());
console.log(myDate.toString(myDate.toDateString));
console.log(myDate.toString(myDate.toLocaleString));
console.log(typeof myDate);

let myCreatedDate = new Date("2024-04-16")
//console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);

//console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday: "long",
})
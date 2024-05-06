console.log("2" != 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
//note It is advisable to avoid these types of conversions
console.log("2" === 2);

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3440934818853288n

// Reference (Non primitive)

//Array,Objects,Functions

const heroes = ["shaktiman","naagraj","doga"];//In curly braces are objects
let myObj = {
    name: "hitesh",
    age: 22,
}
const myfunction = function(){
    console.log("Hello world");//Its like variable is used to declare a function
}

console.log(typeof outsideTemp);

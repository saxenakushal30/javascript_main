let myName = "kushal    "
let mychannel = "tea  "

//console.log(myName.trim().length);
console.log(myName.trueLength);

let myHeroes = ["thor", "spiderman"]

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderman: function(){
    console.log(`Spidy power is ${this.spiderman}`);
  }
}

Object.prototype.kushal = function(){
  console.log(`kushal is present in all objects`);
}

Array.prototype.heykushal = function(){
  console.log(`kushal says hello`);
}

//heroPower.kushal()
myHeroes.kushal()
myHeroes.heykushal()


//Inheritance

const User = {
  name: "Kushal",
  email: "Kushal2@gmail.com"
}

const Teacher = {
  makeVideo: true
}

const TeachingSupport = {
  isAvailable: false
}

const TASupport = {
  makeAssignment: 'JS assignment',
  fulltime: true,
  __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Tea with Kushal   "

String.prototype.trueLength = function(){
  console.log(`${this}`);
  console.log(`${this.name}`);
  console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
function multipleBy5(num){
  return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score){
  this.username = username
  this.score = score
}

createUser.prototype.increment = function(){
  this.score++
}

createUser.prototype.increment = function(){
  console.log(`score is ${this.score}`);
}

const chai = new createUser("chowmein", 40)
const tea = createUser("tea", 10)

chai.printMe()

/*

A new Object is created: The new keyword initiates the creation of a new Javascript object.

A prototype is linked: The newly created object gets linked to the linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created objects. If no explicit return value is speicfied from the constructor, Javascript assumes this the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value(object, array, function, etc.), the newly created object is returned.
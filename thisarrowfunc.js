const user = {
    username: "Kushal",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
    }
}

// user.welcomeMessage()

// user.username = "sam"

// user.welcomeMessage()

//console.log(this);

// function chai(){
//     let username = "Kushal"
//     console.log(this.username);//this works on object not on functions
// }
// //chai()

// const chai = () => {
//     let username = "Kushal"
//     console.log(this);
// }

// chai()

// const addTwo = (num1, num2) => {//called basic arrow function
//     return num1 + num2
// }
//If we wrap in curly braces than we have to right return keyword

// console.log(addTwo(3, 4))




//Implicit return
//If we don't wrap in curly braces than we don't have to right return keyword

const addTwo = (num1, num2) => ( num1 + num2 )

console.log(addTwo(3, 4))

const myArray = [2, 5, 3, 7, 8]

myArray.forEach()



//Here with the help of literal

//const tinderUser = new Object()// Is called Singleton object

//const tinderUser = {}//non-singleton object

//const tinderUser.id = "123abc"
// tinderUser.name = "Samay"
// tinderUser.isLoggedIn = false


//console.log(tinderUser);

// const regularUser = {
//     email: "some@gmail.com"
//     fullname: {
//         userfullname: {
//             firstname: "Kushal",
//             lastname: "Saxena"
//         }
//     }
// }

//console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}
//const obj3 = {obj1, obj2}
//const obj3 = object.assign({}, obj1, obj2, obj4)
//console.log(obj3);


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Kushal"
}
//course.courseInstructor

const {courseInstructor:instructor} = course

console.log(instructor);

{
    name: "hitesh",
    "coursename": "js in hindi",
    "price": "free"
}
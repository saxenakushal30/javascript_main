//Singleton

//To create object 
//Object.create//called constructor object

//object Literals
const mySym = Symbol("key1")



const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]

}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(typeof JsUser[mySym])

JsUser.email = "kushal@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "kushal@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingtwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());

console.log(JsUser.greetingtwo());

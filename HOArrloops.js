// for of

// ["","",""] for arrays


//[{}, {}, {}] for Arrays

const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {


// }

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

//Maps

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")


//console.log(map);


//To destructure values
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

// const myObject = {
//     'game1' : 'NFS' ,
//     'game2' : 'Spiderman'//Maps aer Iterable but here it doesn't work
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb:  "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


for (const key in map) {
    //console.log(key);
}

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
//     }
// }

// For Each loops
const coding =["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function name(item) {
//     console.log(val);
// } )

// coding.forEach( (item) =>{
//     console.log(item);
// } )

// coding.forEach(printMe){
//     console.log(item);
// }

//coding.forEach(printMe())

// coding.forEach( (item, index, arr)=>{
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    }

    {
        languageName: "python",
        languageFileName: "py"
    }

    {
        languageName: "java",
        languageFileName: "java"
    }
]

myCoding.forEach( (item) => {

    console.log(item.languageName);
})
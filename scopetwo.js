function one(){
    const username = "Kushal"

    function two(){
        const website = "youtube"
        console.log(username);
    }
//    console.log(website);

    two()
}

one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
       // console.log(username + website);
    }
    //console.log(website);
}

//console.log(username);


// ++++++++++++++++++++++++++++++ Interesting  ++++++++++++++++++++++++++++++++
console.log(addone(5))

function addone(num){
    return num + 1
}

addone(5)

//addTwo(65) => This is called hoisting

const addTwo = function(num){//addtwo is a variable
    return num + 2
}

addTwo(5)
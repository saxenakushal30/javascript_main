(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`)
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Kushal')//Here parameters are passed 
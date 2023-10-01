const fs = require("fs");
console.log("before");

/***
 * 1. Promise based fn -> takes the input 
 * 2. Returns a promise and the value/state of the promise -> promise based  fn
 * ***/
const promise = fs.promises.readFile("./f10.txt");

// i need to do something when a promise is fulfilled 

/**
 * then is  an event listener over promise  -> fn when promise is resolved (task is done)
 * **/

promise
.then(function(futureValue){
    console.log("Data inside the file is "+ futureValue);
})

/***
 * catch -> is also an event listener on promises -> fn when promise is rejected(You get an erro)
 * */
promise
.catch(function(err){
    console.log("err ", err.message);
    
})

console.log("After");


//functions are first class citizens in JS 


function add(a,b){ 
    
    console.log(a);
    console.log(b);
}

let result = add(1);

console.log(result);


// object ->  collection of key:value pairs


// key -> number, string
//value -> any valid JS type 


// JS object -> represent an entity
// let cap = {
//     name: "Steve",
//     'last Name': "Rogers",
//     isAvenger: true,
//     address: {
//         city: "manhatten",
//         state: "Newyork"
//     },
//     sayHi: function () {
//         console.log("Cap say's HI");
//     },
//     movies: ["Avenger", "civile War"]
// }



// console.log(cap.name);
// console.log(cap.address.state);
// console.log(cap.address.age);
// cap.sayHi();
// console.log(cap.movies[1]);

// console.log(cap['last Name']);
// console.log("***************");

// for(let key in cap){
//     console.log(key);
// }

// for (let key in cap) {
//     console.log(key, " ",cap[key]);
// }
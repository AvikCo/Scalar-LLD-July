
const fs= require("fs");

// console.log("before");


// const promise = fs.promises.readFile("./f1.txt");

// promise
// .then((data)=>{
//     console.log("Data inside the file 1 is " + data)
//     return fs.promises.readFile("./f2.txt");
// })
// .then((data)=>{
//      console.log("Data inside the file 2 is " + data)
//     return fs.promises.readFile("./f3.txt");
// })
// .then((data)=>{
//       console.log("Data inside the file 3 is " + data)
// })
// .catch((err)=>{
//     console.log("err ",err);
// })

// console.log("After");



// The async keyword allows you to define a function that handles asynchronous operations


// // Asynchronous functions execute asynchronously via the event loop. It always returns a Promise
// async function sayHi(){
//     return "Hi";
// }

// // The await keyword
// // You use the await keyword to wait for a Promise to settle either in resolved or rejected state.


// async function display(){
//     const result = await sayHi();
//     console.log(result);
// }

// display();



// console.log("before");


// async function displayFileContent(){

//     try{
//         const content1 = await fs.promises.readFile("./f12.txt");
//         console.log("content1 "+ content1);
//         const content2 = await fs.promises.readFile("./f2.txt");
//         console.log("content2 " + content2);
//         const content3 = await fs.promises.readFile("./f3.txt");
//         console.log("content3 " + content3);
//     }
//     catch(e){
//         console.log("err ",e);
//     }


// }

// displayFileContent();

// console.log("After");


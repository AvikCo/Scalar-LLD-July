



/****
 *CallBack hell-> inital defintion
 *     1. Nesting of callbacks -> when we have have to do serial tasks using async fns -> Pyramid of DOOM
 *      i want to read all the files serially
 *     2. Inversion of control : we send our callback function to an async fn and
 *  then that async fn has the control to call it(Trust issues)  
 * */


 
// let fs = require("fs");
// console.log("Before");
// fs.readFile("./f1.txt", function (err, data) {
//     if (err) {
//         console.log("Error", err);
//     } else {
//         console.log("content " + data);
//         fs.readFile("./f2.txt", function (err, data) {
//             if (err) {
//                 console.log("error " + err)
//             } else {
//                 console.log("content " + data);
//                 fs.readFile("./f3.txt", function (err, data) {
//                     if (err) {
//                         console.log("Error", err);
//                     } else {
//                         console.log("content " + data);
//                     }
//                 })
//             }
//         })
//     }
// })
// console.log("After");





// Promise can either be resolved or rejected once in it’s
// lifetime
// Callbacks of promises goes to a separate queue
// known as microtask queue and it has higher
// priority then normal cab queue




// let fs = require("fs");
// console.log("Before");

// let promise = fs.promises.readFile("./f1.txt");



// promise.then((function(data){
//     console.log("content 1 "+ data);

//     let promise2= fs.promises.readFile("./f2.txt");

//     promise2.then((function(data){
//             console.log("content 2 "+ data);

//             let promise3= fs.promises.readFile("./f3.txt");

//             promise3.then(function(data){
//                 console.log("content 3 " +  data);
//             })
//             .catch(function(err){
//            console.log("err", err);
//             })

//     }))
//     .catch(function(err){
//     console.log("err", err);
// })
// }))
// .catch(function(err){
//     console.log("err", err);
// })



// let fs = require("fs");
// const { setTimeout } = require("timers");
// console.log("Before");

// let promise = fs.promises.readFile("./f1.txt");

// promise.then(function(data){
//     console.log("content 1 " + data);
//      return fs.promises.readFile("./f2.txt");   
// })
// .then(function (data){
//     console.log("content 2 " + data);
//     return fs.promises.readFile("./f3.txt");   
// })
// .then(function(data){
//     console.log("content 3 "+ data);
// })
// .catch(function(err){
//     console.log("err ", err);
// })

// setTimeout(()=>{
//     console.log("Hello from set timeout");
// },0)


// console.log("After");




// const promise1 = Promise.resolve(123);

// console.log(promise1);

// promise1.then((value) => {
//   console.log(value);
//   // Expected output: 123
// });


const promise1 = Promise.reject("erorr");

// console.log(promise1);

// promise1.catch((value) => {
//   console.log(value);
//   // Expected output: 123
// });

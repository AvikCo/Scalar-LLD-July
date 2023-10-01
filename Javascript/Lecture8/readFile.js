/***
 * 1.  you can block the main thread 
 * 2. given  2 files -> read them  and 
 * 3. give me the concatenated result in the order for the file supplied
 * 
 * 
 * */

// const fs = require("fs");

// console.log("Before");
// let content1 = fs.readFileSync("./f1.txt");
// let content2 = fs.readFileSync("./f2.txt");
// console.log("" + content1 + "  " + content2);
// console.log("after");



//sequential task

//call back hell in js

const fs = require("fs");

// console.log("Before");
// fs.readFile("./f1.txt", function(err,content1){
//     fs.readFile("./f2.txt", function(err, content2){
//         fs.readFile("./f3.txt", function(err, content3){
//         console.log("" + content1 + "  " + content2 + " "  +content3);
//     })
//     })

// });

// console.log("after");


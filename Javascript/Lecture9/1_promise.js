

 const fs=require("fs");

// /**
//  * Promise based fn -> do not take  cbs
//  * **/

console.log("before");

const promise = fs.promises.readFile("./f1.txt");

console.log(promise);

setTimeout(()=>{
    console.log(promise);
},1000)





// const promise= new Promise((resolve, reject)=>{

//     setTimeout(()=>{
//       //  resolve("Hii");
//       reject("internal server error");
//     },3000)

// })

// console.log(promise);


// promise.then((data)=>{
//     console.log("Promise is resolved");
//     console.log(data)
// })
// .catch((err)=>{
//         console.log("Promise is rejected");
//     console.log(err);
// })
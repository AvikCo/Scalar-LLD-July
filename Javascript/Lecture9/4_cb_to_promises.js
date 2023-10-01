/**
 * 
 * promisifiy  fs.readfile 
 * */

let fs = require("fs");

function promiseBasedReadFile(filePath){

    return new Promise((resolve, reject)=>{
        
        fs.readFile(filePath, function (err, data){

            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}


promiseBasedReadFile("./f1.txt")
.then((data)=>{
    console.log("promise is resolved with data " +data);
})
.catch((err)=>{
    console.log("promise is rejected with err "+err);
})




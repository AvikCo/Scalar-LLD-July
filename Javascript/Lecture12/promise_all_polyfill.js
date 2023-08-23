
Promise.myPromiseALL=function(arrayOfPromises){

    return new Promise((resolve,reject)=>{

        const resolvedPromiseArr=[];

        arrayOfPromises.forEach(async (promise, index)=>{

            try{
                const value = await promise;
                resolvedPromiseArr.push(value);

                if(index === arrayOfPromises.length-1){
                      resolve(resolvedPromiseArr);
                }
            }
            catch(err){
                reject(err);
            }
        })
      
    })
}


const fs = require("fs");


// const promise1 = fs.promises.readFile("f2.txt");
// const promise2 = fs.promises.readFile("f1.txt");
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 1 resolve');
    resolve(1);
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 2 resolve');
    resolve(2);
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 3 resolve');
    resolve(3);
  }, 5000);
});

console.time("1");
const combinedpromise = Promise.all([promise1, promise2,promise3]);


combinedpromise.then(function (resultArr) {
    console.log(resultArr);
    let result="";
    resultArr.forEach((data)=>{
        result += data;
    })
    return result;
})
.then((data)=>{
    console.timeEnd("1");
    console.log(data);
})
.catch(err=>{
    console.log("Err",err);
})

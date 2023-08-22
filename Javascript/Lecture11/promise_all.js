const fs = require("fs");


// const promise1 = fs.promises.readFile("f2.txt");
// const promise2 = fs.promises.readFile("f1.txt");


// const combinedpromise = Promise.all([promise1, promise2]);


// combinedpromise.then(function (resultArr) {
//     console.log(resultArr);
//     let result="";
//     resultArr.forEach((data)=>{
//         result += data;
//     })
//     return result;
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch(err=>{
//     console.log("Err",err);
// })



const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);
const promise4 = Promise.resolve(4);

const promiseAll = async () => {
    console.log("1");
    const group1 = await Promise.any([promise1, promise2]);
    console.log("2",group1);
    const group2 = await Promise.any([promise3, promise4])

    console.log("3", group2);
    return [group1, group2]
}


promiseAll().
then(console.log).
catch(console.log);

https://www.javascripttutorial.net/es6/javascript-promise-all/
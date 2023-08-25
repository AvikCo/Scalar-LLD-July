
const {process, cache}  = require("./useWeakMap");


let obj = { task1res: "Hello" };
let obj2 = { task2res: "Bye" };
let result1 = process(obj);
console.log("result1", result1);
let result2 = process(obj);
console.log("result2", result2);
let result3 = process(obj2);
console.log("result3", result3);
obj=null;
// console.log(cache.has(obj));
 console.log("14", process(obj));


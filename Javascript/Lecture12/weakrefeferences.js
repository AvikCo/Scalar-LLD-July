/********Q1***************/

// let jhon={};
// jhon.age=25;
// console.log("John 5", jhon);
// jhon=null;
// console.log("John 7", jhon);


/*******************Q2***************/

let jhon = {};    

jhon.age = 25;
let arr = [jhon];
console.log("John 13", jhon);
jhon = null;
console.log("John 17", arr[0]);


let a = {}; 
let b = a;
 a = null; 
 console.log(b);


 /****
 * Garage collection : when an unused type  -> object ,value etc -> they are not in use then 
 * JS's Garbage collector removes it from the memory and frees up the memory for further usage
 * 
 * Ques How do you define whether a type is unused -> 
 * Mark and sweep algorithm -> identified unused types and then remove them  -> if a type is not 
 * refering to any other type/var/ array
 * 
 * **/
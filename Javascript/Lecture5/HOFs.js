

// let arr = [5,7,8,9];


//Violating the DRY :(Donot Repeat yourself) principle 

// code to square every element in the array
// for(let i=0;i<arr.length;i++){
//     arr[i]=arr[i] * arr[i];
// }


// console.log(arr);


// // code to cube of every element in the array
// for(let i=0;i<arr.length;i++){
//     arr[i]=arr[i] * arr[i] * arr[i];
// }

// console.log(arr);



//using HOFs 

/***
 * HOF  -> are the function that accepts a fn as a parameter or returns a function
 * Callbacks -> function that are passed as a paramtere to another fn are known as cb fns. 
 * They usually be called by HOFns 
 * */


// Array.prototype.transformer=function(logic){

//     let newArr=[];
//     let arr=this;

//     for(let i=0;i<arr.length;i++){
//         let ans=logic(arr[i]);
//         newArr.push(ans);
//     }

//     return newArr;
// }

// let arr=[4,5,3,5,3];

// const squaredArr = arr.transformer(function(a){
//     return a*a;
// });

// const cubedArr = arr.transformer(function(a){
//     return a*a*a;
// });

// const complexArr = arr.transformer(function(a){
//     return a*a-7+8*173;
// });

// console.log(squaredArr);
// console.log(cubedArr);
// console.log(complexArr);




/***
 * HOF -> majorly available on arrays
 *  these fn doesn't change the source array
    * foreach -> 
    * Map -> 
    * filter -> 
    * reduce -> 
    * sort -> 
 * */



// let arr=[1,5,7,9,10];
// console.log(arr);

// arr.forEach((value,index,arr)=>{
//     console.log(value, index, arr);
// })


//can you please your own forEach funtion (polyfill for forEach)

// Array.prototype.customForEach = function(cb){
//     for(let i=0;i<this.length;i++){
//         cb(this[i],i,this);
//     }
// }


// arr.customForEach((value, index, arr)=>{
//     console.log(value, index, arr);
// })



// let arr=[1,5,7,9,10];


// const mappedArr = arr.map((value,index,array)=>{
//     return value*5+index;
// })

// console.log(arr);
// console.log(mappedArr);



// const squaredArr = arr.map((value,index,arr)=>{
//     return value*value;
// })



// const cubedArray = arr.map((value,index,arr)=>{
//     return value*value*value;
// })

// console.log(squaredArr);
// console.log(cubedArray);


//Implement a polyfill for map 


// Array.prototype.customMap=function(cb){

//     let newArray=[];

//     for(let i=0;i<this.length;i++){
//         let value  = cb(this[i], i, this);
//         newArray.push(value);
//     }

//     return newArray;
// }


// const squaredArr = arr.customMap((value,index,arr)=>{
//     return value*value;
// })



// const cubedArray = arr.customMap((value,index,arr)=>{
//     return value*value*value;
// })

// console.log(squaredArr);
// console.log(cubedArray);

//filter 


// let elements = [1, 2, 3,11,4,5,45,34,12,18];


// function isOdd(value,index,arr){
//     return value%2===1;
// }

// function isEven(value,index,arr){
//     return value%2===0;
// }

// const output = elements.filter(isOdd);
// const outputNew = elements.filter(isEven);

// console.log(output);
// console.log(outputNew);


//polfill for filter 

// Array.prototype.customFilter = function(cb){

//     let newArr=[];

//     for(let i=0;i<this.length;i++){

//         let isIncluded = cb(this[i],i,this);

//         if(isIncluded){
//             newArr.push(this[i]);
//         }
//     }

//     return newArr;
// }


// let elements = [1, 2, 3,11,4,5,45,34,12,18];

// function isOdd(value,index,arr){
//     return value%2===1;
// }

// function isEven(value,index,arr){
//     return value%2===0;
// }

// const output = elements.customFilter(isOdd);
// const outputNew = elements.customFilter(isEven);

// console.log(elements);
// console.log(output);
// console.log(outputNew);


//reduce

let arr=[4,5,2,45,5,13,5,3,5,3,56,3,56];

//whenever you want your arr to reduce to a single value : Number, String, Object, anotherArray 

//find the sum of a given array 

// reduce the array to the sum of its array

// [4,5,2,45,5,13,5,3,5,3,56,3,56]  -> sum 


// let reducedValue = arr.reduce((acc,value,i,arr)=>{
//     return acc + value;
// }, 0);

// console.log(reducedValue);


//reduce a given array to a space seperated string 


// let reducedValue = arr.reduce((acc,value,i,arr)=>{
//     return acc + value+ " ";
// }, "");

// console.log(reducedValue);



// let reducedValue = arr.reduce((acc,value,i,arr)=>{
//       let key=`element${i+1}`;  
//        acc[key]=value;
//        return acc;
// }, {});

// console.log(reducedValue);

// write the polyfill for reduce


// Array.prototype.customReduce = function(cb, intialValue){

//     let acc=intialValue;

//     for(let i=0;i<this.length;i++){

//         acc = cb(acc, this[i],  i, this);
//     }

//     return acc;
// }


// let reducedValue = arr.customReduce((acc,value,i,arr)=>{
//     return acc + value;
// }, 0);

// console.log(reducedValue);


//reduce a given array to a space seperated string 


// let reducedValue = arr.customReduce((acc,value,i,arr)=>{
//     return acc + value+ " ";
// }, "");

// console.log(reducedValue);



// let reducedValue = arr.customReduce((acc,value,i,arr)=>{
//       let key=`element${i+1}`;  
//        acc[key]=value;
//        return acc;
// }, {});

// console.log(reducedValue);



// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // achieving what you achieved via filter also using reduce

// const filteredArr = arr.reduce((acc, value) => {
// if (value & 1) acc.push(value);
// return acc;
// }, []); 

// console.log(filteredArr);
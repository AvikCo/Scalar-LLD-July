
/**
 * ways to create object in js
 * 1. object literal
 * 2. Object.create 
 * **/

//  * 1. properties and methods
//  * 2. Object -> as your prototype (parent)

// let obj = {
//     name: "Steve",
//     address: {
//         state: "Newyork",
//         city: "Manhatten"
//     },
//     sayHi: function () {
//         console.log(`${this.name} say's Hi`);
//     }
// };


// console.log(obj.__proto__ === Object.prototype);


// function f(){
//     console.log("hello");
// }

// console.log(f.__proto__ === Function.prototype);
// console.log(f.__proto__.__proto__ === Object.prototype);


// let arr= [1,2,3,4,5];
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__ === Object.prototype);

// console.log(typeof arr);

// let a = 5;

// console.log(typeof a);



/**
 * **************************Inbuilt object works ***************
 * 1. array -> Array(Object/class)
 * 2. function -> Function
 * 3. object -> Object 
 * For primitive : temporary parent
 * *  num -> Number
 * *  str -> String
 * *  boolean -> Boolean
 * 
 * 
// let name="Utkarsh";

// console.log(name.__proto__);

//  *     whenever you want to access any method or property
//  *      then that  primitive is typecased as a 
//  *      children of there respective parent class and 
//  *      then that method is applied on that non primitive 
//  *      you are returned the answer. -> autoboxing
*/


// let a = "grwgfrw";
// let b=a;

// a="wfgwrgw";

// console.log(a);
// console.log(b);




/**********2.Object create******/


// let obj = Object.create(null);
// console.log(obj.__proto__);

// const obj1= {
//     name:"Utkarsh"
// }

// let obj2 = Object.create(obj1);

// obj2.age=49;

// // console.log(obj2);


// //is parent of 
// console.log(obj1.isPrototypeOf(obj2));



//   Specie , Animal , Bird 

const specie={
    type:"Specie",
    speak:function(){
        console.log(`${this.type} is speking`)
    }
}


const animal = Object.create(specie);

animal.walk = function (){
    console.log("Animal is walking");
}


const bird = Object.create(animal);

bird.fly = function (){
    console.log("Bird is flying");
}


// console.log(bird);
//  bird.speak();

console.log(bird);

console.log(Object.keys(bird));



// animal.dance="dancing";

// Object.defineProperty(animal, 'dance',{
//     value:"dancing",
//     enumerable:false
// })


//  loop -> object -> for in loop -> iterate over all the prop of the object , 
// inherited which are enumrable to for in
for(let key in bird){   
    if(specie.hasOwnProperty(key)){
        console.log(key);
    }
}


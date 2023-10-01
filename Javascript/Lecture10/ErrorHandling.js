//   Inbuilt Errors in Javascript


//  Syntax error

// 1.  Unexpected identifier

//lt x=5;


// 2.  Illlegal Shadowing : Identifier 'a' has already been declared

// let a=10;
// {
//     var a=20;
//     console.log(a);
// }


//   Runtime error -> only get to know after exceuting the code and it will
//   TypeError
//   Reference Error
//   Range Error


/**********************Run time Errors************************/
/***
 * Reference Error
 * ***/

// 1. TDZ -> temporal Dead Zone ReferenceError: Cannot access 'a' before initialization
// console.log(a);
// let a=5;
// 2. ReferenceError: fn is not defined
// console.log("Hello");
// fn();
// 3. ReferenceError: a is not defined (in strict mode if a variable is not defined)
// "use strict";
// a=10;
// console.log(a);


/***********
 *
 * Range error
 * *****/
// 1. RangeError: Maximum call stack size exceeded stackoverflow  
// infinite recursion
// function add(){
//     add();
// }
// add();
// 2. array size RangeError: Invalid array length
// let a=[];
// a.length = 100 ** 100;
// console.log(a.length);



/*****
 * 
 * 
 * 
 * Type error: 
 * 1.whenever a method is called and it does not exist 
 * 2. when you accessing a property for which  object is undefined
 * 
 * **/


// let num=10;
// console.log(num.toUpperCase());

// function fn(){
//     let string="hello";
//     console.log(string.abc.def);
// }

//fn();
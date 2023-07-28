// Javascript : dynamically typed language

// var x=10;
// x="Hello";

//statistacally typed language
//int x=5;


// JS is a scripting language (NodeJS)
// serverside programming in JS 


//Fact 1 : default of JS -> always -> undefined

var myVar;
console.log("value of ",myVar);


//Datatypes 

//Primitive types -> number, string, boolean, nulll, undefined  
//NewTypes : BigInt, Symbol

//Non Primitive types -> objects, functions, arrays 
//New Types : map, set , weakmap, weakset


// ********** number -> similar to mathematical  -> 64 bit floating values
console.log(5/2);


// ********** string 

var name="Utkarsh";
var myName='Utkarsh';
console.log(name);
console.log(myName);

// Problem : JS '' and "" doen't support multiple line strings;

var age=29;


let str2 = 'I am ' + age + " years old ";
console.log(str2);

let str1 = 'I am ' + age + " years old ";
console.log(str1);


let templateString = `I am
 ${age} years old`;

console.log(templateString);


// ********** boolean 

var isMarried = false;



// ********** null vs undefined

// null -> empty value -> user defined
//undefined -> absense of defination  -> undefined -> js

var totalRuns =  null;
console.log(totalRuns);


// ***********typeof Operator***********************

var a = 10;
console.log("a1", typeof a);
a = "string";
console.log("a2", typeof a);
a = { "name": "Utkarsh" };
console.log("a3", typeof a);

// Fact-2 : JS -> just 10days -> netscape

console.log(typeof null);

var arr = [1,4,5,6,3,5,3,6,3];

var person = {
    name:"Utkarsh",
    age:28
}

console.log(typeof person);

console.log(arr);
console.log(typeof arr);

// correct way to check whether you are recieving array or object

console.log(Array.isArray(person));

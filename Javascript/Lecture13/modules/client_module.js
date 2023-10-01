
console.log("client 1 is executing");

//import a name based export
import {fn, abc} from "./lib_module.js";


//import a default export 
import x from "./lib_module.js";

console.log("I am ",a);
console.log("private", abc);
console.log(x);
fn();
var a=100;
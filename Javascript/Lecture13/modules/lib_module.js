console.log("lib is executing");

// you can choose which data you want to make accessible
// and what to hide

var a=10;
export var abc = "Hello"


/************name based export **************/
export function fn(){
    console.log("Hi I am function");
    abc="fw;fwpfw";
}

let anotherVariable = "another";


setTimeout(()=>{
    console.log(a);
},2000)

/************default export **************/
// if anyone imports my file -> by default my anothervar -> exported
// there only one default in a file 
export default {fn,abc,anotherVariable};





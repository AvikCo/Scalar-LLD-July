/**
 * functions are also object
 * object : key : value pair  
 * */

function fn(){

    console.log("Hi , I am an fn");1

}


console.dir(fn);



fn.count=0;
fn.showCount= function(){
    console.log("count on fn is ", this.count);
}

// fn();
// fn.showCount();


for(let key in fn){
    console.log(key, ": ",fn[key]);
}


/*documentation -> function are the object that implements callable constructor
/**Layman fn is an object that can also be called */





/***
 * function are first class citizens in JS -> 
 *  1. functions also behave as variables in JS
 *  2. Assign a variable , pass a variable as a parameter, return a variable  
 * */

// let a = ()=>{
//     console.log("helo");
// }

// const add=(a,b)=>{
//     return a+b;
// }

// const average=(add,a,b)=>{
//     return (add(a,b)/2);
// }

// console.log(average(add,5,3));


/***HOF -> fn that accepts or returns a fn */

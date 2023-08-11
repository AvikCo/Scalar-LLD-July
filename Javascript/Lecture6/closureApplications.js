// infinite currying

function counter(args) {    
    //write code only inside this function 

    let count=0;
    count++;

    if(args===0){
        return count;
    }

    return function inner(args){
        
        count++;

        if(args==0){
            return count;
        }else{
            return inner;
        }

    }

}


// console.log(counter(0)); // print -> 1
// console.log(counter()(0)); // print ->2
// console.log(counter()()(0)); // print ->3 
// console.log(counter()()()(0)); // print ->4

// Homework 

// function sum() {

// }

// sum(3)(4)();  // 7

// sum(3)(7)(8)(); //18 

// sum(1)(7)(8)(5)(); // 21 



/***************Private variables******/
// function createEvenStack() {
//     let items=[];
//     return {
//         push(item) {
//             if (item % 2 == 0) {
//                 console.log("Is pushed");
//                 items.push(item);
//             }
//             else {
//                 console.log("Please input even value");
//             }
//         },
//         pop() {
//             return items.pop();
//         }
//     };
// }

// const stack = createEvenStack();
// stack.push(10);
// stack.push(20);
// const poppedElement=stack.pop();
// console.log(poppedElement);

// console.log(stack.items); // prevent this behaviour


/**
 * Memoization : sum calculation take a lot of time  with 
 * memoization we can store  result of costly calculations -> useMemo
 * */


function calc(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += n;
    }
    return sum;
}

function memoize(fn){

    let cache={};

    return function(n){
        const isAlreadyComputed=cache[n]!=undefined;
        if(isAlreadyComputed){
            return cache[n];
        }else{
            const result = fn(n);
            cache[n]=result;
            return result;
        }
    }
}

 let efficientCalc = memoize(calc);
 console.time();
const res = efficientCalc(5);
console.log(res);
console.timeEnd();

 console.time();
const res2 = efficientCalc(5);
console.log(res2);
console.timeEnd();

 console.time();
const res3 = efficientCalc(5);
console.log(res3);
console.timeEnd();


//Immidiately invoked function expressions 

// JS function defined as an expression , executed immidiately after creation 



// function multiply(a,b){
//     return a*b;
// }


// let ans = (function(a,b){
//     return a*b;
// }
// )(5,10);

// console.log(ans);



//How can you avoid polltuion


// ( function(){
//     var myName="Utkarsh";
    
//     function multiply(a,b){
//         return a*b;
//     }

//     console.log(multiply(5,10));
// }
//  )();





// var calculator = (function(){
//     function multiply(a,b){
//         return a*b;
//     }

//      function add(a,b){
//         return a*b;
//     }

//     return {
//         add, 
//         multiply
//     }
// }
// )();




// function grandParent(){
//     return {
//         name : "Utkarsh"
//     }
// }

// Below is the implementation of filter using reduce. Is this right to do this way 


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredArr = arr.reduce((acc, value) => {
if (value & 1) acc.push(value);
return acc;
}, []); 

console.log(filteredArr);
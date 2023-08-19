// The below function will take a number as input and will resolve one second later with the number doubled.

// const doubleAfter1Second = x => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve( x * 2)
//         }, 1000)
//     })
// }

// async function calculateResult(x){
//     try{
//     const a1= await doubleAfter1Second(x);
//     const a2= await doubleAfter1Second(a1);
//     const a3= await doubleAfter1Second(a2);
//     console.log(a1+a2+a3);
//     }
//     catch(err){
//         console.log(err.message);
//     }
// }
// calculateResult(10);


const doubleAfter1Second = x => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve( x * 2)
        }, 1000)
    })
}
//Second way 

async function calculateResult(x){
    const a1= await doubleAfter1Second(x);
    const a2= await doubleAfter1Second(a1);
    const a3= await doubleAfter1Second(a2);
    return a1+a2+a3;
}

calculateResult(10)
.then(data=>{console.log(data)})
.catch(err=>{console.log(err.message)});






// let sum = doubleAfter1Second(10)  + doubleAfter1Second(a1) + doubleAfter1Second(a2);
// console.log(sum);

// doubleAfter1Second(10)
// .then(a1=>{
//        doubleAfter1Second(a1)
//        .then(a2=>{
//          doubleAfter1Second(a2)
//          .then(a3=>{
//          console.log(a1+a2+a3);
//         })
//     })     
// })


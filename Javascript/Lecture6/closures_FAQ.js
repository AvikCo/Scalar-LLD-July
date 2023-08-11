// Q1_1
// function outer() {
//     let arrFn = [];
//     for (var i = 0 ;i < 3; i++) {
//         arrFn.push(function fn() {
//             i++;
//             console.log(i);
//         })
//     }
//     return arrFn;
// }
// let arrFn = outer();
// arrFn[0]();
// arrFn[1]();
// arrFn[2]();



// Q1_2
// function outer() {
//     let arrFn = [];
//     for (let i = 0 ;i < 3; i++) {
//         arrFn.push(function fn() {
//             i++;
//             console.log(i);
//         })
//     }
//     return arrFn;
// }
// let arrFn = outer();
// arrFn[0]();
// arrFn[0]();

// arrFn[1]();
// arrFn[2]();




//q-1-3
/**
 * fn is taking value from closure -> i=3
 * */ 
function outer() {
    /**
     * arrfns block scope refer to -> functions
     * */ 
    let arrFn = [];
    let i=0;
    for ( i = 0 ;i < 3; i++) {
        arrFn.push(function fn() {
            console.log(i);
        })
    }
    return arrFn;
}
let arrFn = outer();
arrFn[0]();
arrFn[1]();
arrFn[2]();
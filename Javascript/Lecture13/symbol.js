

// let a = [1, 2, 3, 4];
// let b = [1, 2, 3, 4];


// console.log(a == b);


// let str1="Hello";
// let str2="Hello";
// console.log(str1 == str2);


/****** 
 * symbols  : used to create unique primitives 
 ****/


// let sym = Symbol("hi");
// let sym2 = Symbol("hi");

// console.log("symbol", sym);
// console.log("symbol", sym2);
// console.log(sym==sym2);


//  usecase-1
//         when you want only to add or delete a property from an object but not  update it
//     hide it during iteration -> you have to use symbol
 


// let obj={
//     key1:"Hello",
//     key2:"Hi",
//     [Symbol("id")]:"Private"
// }



// for(let key in obj){
//     console.log(key ," : ", obj[key]);
// }




// let sym1 =  Symbol("id");
// console.log(obj);


// let obj = {
//     [Symbol("id")]: 1234,
//     [Symbol("name")]: "Hello"
// }



// // //  -> you only want to add/delete  property but you don't want to update it 


// let id1 = Symbol("id");
// let name = Symbol("name");
// obj["id"] = "fake";
// console.log("Before",obj);
// delete obj[id1];
// console.log("After",obj);


// const obj = {};

// obj[Symbol("a")] = "a";
// obj[Symbol.for("b")] = "b";
// obj["c"] = "c";
// obj.d = "d";

// for (const i in obj) {
//   console.log(i);
// }




// console.log(JSON.stringify({ [Symbol("foo")]: "foo", a:"b" }));


// const sym = Symbol("foo");
// const obj = { [sym]: 1 };

// console.log(obj[sym]);
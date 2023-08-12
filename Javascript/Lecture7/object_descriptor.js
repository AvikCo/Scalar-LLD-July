// Metadata -> object descriptors 
// DATA  -> prop                 
// value   -> value of that prop         
// writable  -> can you change 
    //   it is iteratble using for in loop 
// enumerable ->  can iterate over it 



// let obj = {
//     name:"Utkarsh",
//     age:29,
//     address:{
//         homeNumber:125
//     }
// }

// Object.defineProperty(obj,'test',{
//     value:"fail",
//     enumerable:false,
//     writable:false
// })


// obj.test="pass";


// console.log(obj.test);

// for(let key in obj){
//     console.log("in loop",key);
// }



// Object.freeze is used to prevent the modification of an object’s properties and the addition/removal of new properties

// const frozenObject = Object.freeze(obj);

// frozenObject.address.homeNumber = 500;
// frozenObject.address.laneNumber= 15;

// console.log(frozenObject);

// Shallow Freeze
// Object.freeze method makes the object completely read-only, but it’s only doing a shallow freeze,
//  which means that it will only freeze the immediate properties of the object itself. 
// If the object contains an array or object as a property, those properties can still be modified.




//  The Object.seal() method prevents the addition and deletion of properties from an object,
//   but it does not prevent the modification of the values of existing properties.


// let obj = {
//     name:"Utkarsh",
//     age:29,
//     address:{
//         homeNumber:125
//     }
// }

// const sealedObject = Object.seal(obj);

// sealedObject.name="Rahul"
// sealedObject.status="Married"

// console.log(sealedObject);


//deep freeze


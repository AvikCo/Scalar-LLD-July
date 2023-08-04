

// function Person(name, age){
//     this.name=name;
//     this.age=age;
// }

// Person.prototype.giveIntro=function(){
//         console.log(`My name is ${this.name} and my age is ${this.age}`)
// }


// const person1= new Person("Utkarsh", 29);
// const person2= new Person("Rahul", 23);
// const person3= new Person("Jay", 3);
// const person4= new Person("Sagar", 35);
// const person5= new Person("Swetha", 64);
// const person6= new Person("Kunal", 6);



// console.log(person1);
// console.log(person2);
// console.log(person3);
// console.log(person4);
// console.log(person5);
// console.log(person6);




// Array.prototype.sayHi = ()=>{
//     console.log("hi");
// }

let arr= [1,2,3,4,5];

let arr1 = new Array(50,2,3,4,5);
let arr2 = new Array(3,6,4,3,5);
let arr3 = new Array(6,5,3,6,3);
let arr4 = new Array(5,6,3,6,2,1);



console.log(arr1);

console.log(arr1.__proto__ === Array.prototype);
console.log(arr1.__proto__.__proto__ === Object.prototype);
console.log(arr1.__proto__.__proto__ .__proto__ === null);





// console.log(arr1.__proto__ === Array.prototype);
// console.log(arr2.__proto__ === Array.prototype);
// console.log(arr3.__proto__ === Array.prototype);
// console.log(arr4.__proto__ === Array.prototype);


// console.log(typeof Object);



// const obj1={
//     name:"Utkarsh"
// }

// const obj2={
//     name:"Utkarsh"
// }


// const obj3={
//     name:"Utkarsh"
// }



// console.log(obj1.__proto__ === Object.prototype);

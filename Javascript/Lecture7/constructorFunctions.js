
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.sayHi = function () {
//         console.log(`I am ${this.name} and ${this.age} years old`);
//     }
// }

// function SuperPerson(name, age){

//     const person = new Person(name, age);

//      this.sayHi = function () {
//         console.log(`I am a super Person ${this.name} and ${this.age} years old`);
//     }
// }

// SuperPerson.prototype.__proto__  = Person.prototype;


// let person1 = new SuperPerson("Utkarsh", 29);

// console.log(person1.name);

// console.log(person1.__proto__ === SuperPerson.prototype);   // SuperHuman.prototype 

// console.log(person1.__proto__.__proto__ === Person.prototype);   // Person.prototype 


// console.log(person1.__proto__.__proto__.__proto__ === Object.prototype);   // Object.prototype 



//class are syntax sugars in JS



// function Person(name, age) {
//     this.name = name;
//     this.age = age;
    
// }

// Person.prototype.sayHi = function () {
//         console.log(`I am ${this.name} and ${this.age} years old`);
//     }


// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sayHI() {
//         console.log(`I am ${this.name} and ${this.age} years old`);
//     }
// }


// const person = new Person("utkasj",20);
// console.log(person);





// class SuperHuman extends Person {
//     constructor(name, age) {
//         super(name, age)
//     }
//     sayHI() {
//         console.log(`I am super Human and ${this.age} years old`);
//     }
// }

// const person= new SuperHuman("Utkarsh", 29);
// console.log(person.sayHI());



// console.log(Object.prototype);
// console.log(Object.__proto__ === Function.prototype);


function x(){

}

// console.log(x.__proto__ === Function.prototype);


// x.prototype.sayHi="hrffr";

// console.dir(x);

let obj1 = Object.create(null); 
obj1.test="pass";
let obj2 = Object.create(obj1);
 obj2.age = 49; 
 console.log( obj2); 


//  typeof obj2 is object, but its prototype doesn't have Object prototype. Can you explain this
